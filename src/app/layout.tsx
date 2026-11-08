import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import AuthProvider from "@/components/providers/AuthProvider";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "JOGJA KICKBOXING FESTIVAL 2026 — #JOGJAPUNYANYALI",
    template: "%s | JKBF 2026",
  },
  description:
    "Website resmi Jogja Kickboxing Festival 2026. Platform informasi kejuaraan kickboxing resmi Yogyakarta — #JOGJAPUNYANYALI. RISE • FIGHT • CONQUER.",
  keywords: [
    "Jogja Kickboxing Festival",
    "JKBF 2026",
    "kickboxing Yogyakarta",
    "Kejurda Kickboxing DIY",
    "Redy Open Championship",
    "WAKO kickboxing Indonesia",
    "KBI DIY",
  ],
  openGraph: {
    title: "JOGJA KICKBOXING FESTIVAL 2026",
    description:
      "Website resmi Jogja Kickboxing Festival 2026. Platform informasi kejuaraan kickboxing resmi Yogyakarta — #JOGJAPUNYANYALI.",
    siteName: "JKBF 2026",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${bebasNeue.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-jkb-black text-jkb-offwhite selection:bg-jkb-red selection:text-white">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
