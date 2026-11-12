import type { NextConfig } from "next";

// Ensure DATABASE_URL fallback for SQLite on Vercel builds
if (!process.env.DATABASE_URL || process.env.DATABASE_URL.trim() === "") {
  process.env.DATABASE_URL = "file:./dev.db";
}

// Ensure NEXTAUTH_SECRET fallback
if (!process.env.NEXTAUTH_SECRET || process.env.NEXTAUTH_SECRET.trim() === "") {
  process.env.NEXTAUTH_SECRET = "jkb_production_secret_2026_fallback";
}

// Ensure NEXTAUTH_URL is valid and never a literal placeholder during build/prerendering
const rawNextAuthUrl = process.env.NEXTAUTH_URL?.trim() || "";
const isBrokenNextAuthUrl =
  !rawNextAuthUrl || rawNextAuthUrl.toLowerCase().includes("next_public_app_url");
if (isBrokenNextAuthUrl) {
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  process.env.NEXTAUTH_URL = vercelUrl
    ? `https://${vercelUrl}`
    : "http://localhost:3000";
}

if (!process.env.NEXTAUTH_URL_INTERNAL || process.env.NEXTAUTH_URL_INTERNAL.trim() === "") {
  process.env.NEXTAUTH_URL_INTERNAL = process.env.NEXTAUTH_URL;
}

const nextConfig: NextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_URL_INTERNAL: process.env.NEXTAUTH_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  outputFileTracingIncludes: {
    '/**': ['./prisma/dev.db', './dev.db'],
  },
  experimental: {
    agentUpgrade: "security",
  },
};

export default nextConfig;
