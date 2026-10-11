"use server";

import prisma from "@/lib/prisma";

export interface CheckoutInput {
  customerName: string;
  guestEmail: string;
  customerPhone: string;
  deliveryMethod: "PICKUP_VENUE" | "EXPEDITION";
  shippingAddress?: string;
  shippingCity?: string;
  shippingPostalCode?: string;
  courier: string;
  shippingCost: number;
  notes?: string;
  paymentMethod: string;
  items: {
    variantId: string;
    quantity: number;
    price: number;
  }[];
}

export async function createOrderAction(input: CheckoutInput) {
  try {
    if (!input.customerName || !input.guestEmail || !input.customerPhone) {
      return { success: false, error: "Harap lengkapi nama, email, dan nomor WhatsApp." };
    }

    if (!input.items || input.items.length === 0) {
      return { success: false, error: "Keranjang belanja kosong." };
    }

    if (input.deliveryMethod === "EXPEDITION" && !input.shippingAddress) {
      return { success: false, error: "Harap isi alamat lengkap untuk pengiriman ekspedisi." };
    }

    // Execute transactional order creation and stock decrement
    const result = await prisma.$transaction(async (tx) => {
      // 1. Verify and update stock for all items
      let subtotal = 0;
      for (const item of input.items) {
        const variant = await tx.productVariant.findUnique({
          where: { id: item.variantId },
          include: { product: true },
        });

        if (!variant) {
          throw new Error(`Varian produk tidak ditemukan.`);
        }

        if (variant.stockQuantity < item.quantity) {
          throw new Error(
            `Stok untuk ${variant.product.name} (Ukuran ${variant.size || "Standard"}) tidak mencukupi. Tersisa ${variant.stockQuantity} pcs.`
          );
        }

        // Decrement stock
        await tx.productVariant.update({
          where: { id: item.variantId },
          data: {
            stockQuantity: {
              decrement: item.quantity,
            },
          },
        });

        subtotal += item.price * item.quantity;
      }

      const totalAmount = subtotal + (input.shippingCost || 0);
      const randomOrderSuffix = Math.floor(100000 + Math.random() * 900000);
      const orderNumber = `JKB-ORD-2026-${randomOrderSuffix}`;
      const claimBarcode = `JKB-CLAIM-${Math.floor(10000 + Math.random() * 90000)}`;

      // 2. Create Order
      const newOrder = await tx.order.create({
        data: {
          orderNumber,
          customerName: input.customerName,
          guestEmail: input.guestEmail,
          customerPhone: input.customerPhone,
          deliveryMethod: input.deliveryMethod,
          shippingAddress: input.shippingAddress || null,
          shippingCity: input.shippingCity || null,
          shippingPostalCode: input.shippingPostalCode || null,
          courier: input.courier,
          shippingCost: input.shippingCost || 0,
          totalAmount,
          status: "CONFIRMED",
          paymentStatus: "PAID", // Auto-approved under Midtrans Sandbox Demo
          fulfillmentStatus:
            input.deliveryMethod === "PICKUP_VENUE"
              ? "READY_FOR_PICKUP"
              : "PROCESSING",
          claimBarcode,
          notes: input.notes || null,
          orderItems: {
            create: input.items.map((item) => ({
              variantId: item.variantId,
              quantity: item.quantity,
              price: item.price,
            })),
          },
        },
      });

      return newOrder;
    });

    return {
      success: true,
      orderId: result.id,
      orderNumber: result.orderNumber,
    };
  } catch (error: any) {
    console.error("Error creating order:", error);
    return {
      success: false,
      error: error.message || "Gagal memproses pesanan. Silakan coba lagi.",
    };
  }
}
