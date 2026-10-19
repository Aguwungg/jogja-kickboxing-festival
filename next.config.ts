import type { NextConfig } from "next";

// Ensure NEXTAUTH_URL is never empty string during build/prerendering
if (!process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL.trim() === "") {
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
};

export default nextConfig;
