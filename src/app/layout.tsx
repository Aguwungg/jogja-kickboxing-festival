import type { Metadata } from "next";
import localFont from "next/font/local";
import AuthProvider from "@/components/providers/AuthProvider";
import "./globals.css";

const bebasNeue = localFont({
  src: "./fonts/BebasNeue-Regular.woff2",
  variable: "--font-bebas-neue",
  weight: "400",
  display: "swap",
});

const plusJakartaSans = localFont({
  src: "./fonts/PlusJakartaSans-Variable.woff2",
  variable: "--font-plus-jakarta",
  weight: "400 800",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-Variable.woff2",
  variable: "--font-space-grotesk",
  weight: "500 700",
  display: "swap",
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
