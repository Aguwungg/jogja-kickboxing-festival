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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://jogjakickboxingfestival.com");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JOGJA KICKBOXING FESTIVAL 2026 — 19–20 Desember 2026 | GOR Pancasila UGM",
    template: "%s | JKBF 2026",
  },
  description:
    "Website resmi Jogja Kickboxing Festival 2026 — 19–20 Desember 2026 di GOR Pancasila UGM, Yogyakarta. Kejuaraan kickboxing resmi standar WAKO & sportainment. #JOGJAPUNYANYALI.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Jogja Kickboxing Festival",
    "JKBF 2026",
    "GOR Pancasila UGM",
    "kickboxing Yogyakarta",
    "Kejurda Kickboxing DIY",
    "Redy Open Championship II",
    "WAKO kickboxing Indonesia",
    "Pengprov KBI DIY",
    "Faisal Giru",
    "#JOGJAPUNYANYALI",
  ],
  openGraph: {
    title: "JOGJA KICKBOXING FESTIVAL 2026 — 19–20 Desember 2026",
    description:
      "19–20 Desember 2026 di GOR Pancasila UGM, Yogyakarta. Dua hari semangat kompetisi, sportivitas, dan hiburan dalam satu festival kickboxing resmi — #JOGJAPUNYANYALI.",
    siteName: "JKBF 2026",
    locale: "id_ID",
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/jkbf-brand-poster.png",
        width: 1024,
        height: 1024,
        alt: "Jogja Kickboxing Festival 2026 — 19–20 Desember 2026 — GOR Pancasila UGM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JOGJA KICKBOXING FESTIVAL 2026 — 19–20 Desember 2026",
    description:
      "GOR Pancasila UGM, Yogyakarta. #JOGJAPUNYANYALI — RISE • FIGHT • CONQUER.",
    images: ["/images/jkbf-brand-poster.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const eventStructuredData = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "Jogja Kickboxing Festival 2026",
  alternateName: "JKBF 2026",
  description:
    "Dua hari semangat kompetisi kickboxing resmi berstandar WAKO, sportivitas, dan hiburan di Yogyakarta — #JOGJAPUNYANYALI.",
  startDate: "2026-12-19",
  endDate: "2026-12-20",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "GOR Pancasila UGM",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yogyakarta",
      addressRegion: "Daerah Istimewa Yogyakarta",
      addressCountry: "ID",
    },
  },
  organizer: [
    {
      "@type": "SportsOrganization",
      name: "Pengprov Kickboxing Indonesia DIY",
    },
    {
      "@type": "Organization",
      name: "Noise Comm Indonesia",
    },
  ],
  sameAs: [
    "https://www.instagram.com/jogjakickboxingfestival/",
    "https://www.tiktok.com/@jogjakickboxingfestival",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventStructuredData) }}
        />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
