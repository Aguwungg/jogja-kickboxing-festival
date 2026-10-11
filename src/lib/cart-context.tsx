"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { formatRupiah } from "@/lib/currency";

export { formatRupiah };

export interface CartItem {
  variantId: string;
  productId: string;
  name: string;
  slug: string;
  imageUrl: string;
  size?: string | null;
  color?: string | null;
  price: number;
  quantity: number;
  maxStock: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggleCart: () => void;
  totalItems: number;
  subtotal: number;
  formatRupiah: (amount: number) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "jkb_merch_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (e) {
      console.warn("Failed to parse cart items from storage", e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn("Failed to persist cart items to storage", e);
    }
  }, [items, isHydrated]);

  const addItem = (newItem: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    const qtyToAdd = newItem.quantity || 1;
    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.variantId === newItem.variantId);
      if (existingIndex > -1) {
        const updated = [...prev];
        const currentQty = updated[existingIndex].quantity;
        const newQty = Math.min(currentQty + qtyToAdd, newItem.maxStock || 99);
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
        };
        return updated;
      } else {
        const initialQty = Math.min(qtyToAdd, newItem.maxStock || 99);
        return [
          ...prev,
          {
            ...newItem,
            quantity: initialQty,
          },
        ];
      }
    });
    setIsOpen(true);
  };

  const removeItem = (variantId: string) => {
    setItems((prev) => prev.filter((i) => i.variantId !== variantId));
  };

  const updateQuantity = (variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(variantId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => {
        if (i.variantId === variantId) {
          const clamped = Math.min(quantity, i.maxStock || 99);
          return { ...i, quantity: clamped };
        }
        return i;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isOpen,
        setIsOpen,
        toggleCart,
        totalItems,
        subtotal,
        formatRupiah,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    return {
      items: [],
      addItem: () => {},
      removeItem: () => {},
      updateQuantity: () => {},
      clearCart: () => {},
      isOpen: false,
      setIsOpen: () => {},
      toggleCart: () => {},
      totalItems: 0,
      subtotal: 0,
      formatRupiah: (n: number) =>
        new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(n),
    };
  }
  return context;
}
