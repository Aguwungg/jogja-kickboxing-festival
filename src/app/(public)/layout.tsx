import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EventQuickAccessBar from "@/components/layout/EventQuickAccessBar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="pb-14 lg:pb-0">{children}</div>
      <Footer />
      <EventQuickAccessBar />
    </>
  );
}
