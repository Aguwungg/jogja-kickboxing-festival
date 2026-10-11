import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/lib/cart-context";
import CartDrawer from "@/components/merch/CartDrawer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <Navbar />
      <CartDrawer />
      {children}
      <Footer />
    </CartProvider>
  );
}
