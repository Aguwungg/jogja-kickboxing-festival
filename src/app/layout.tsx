import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import AuthProvider from "@/components/providers/AuthProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "JOGJA KICKBOXING FESTIVAL & REDY CHAMPIONSHIP 2",
    template: "%s | JKB 2026",
  },
  description: "Official Digital Platform for Jogja Kickboxing Festival & Redy Championship 2. DI BALIK KALEM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${barlowCondensed.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans bg-jkb-black">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
