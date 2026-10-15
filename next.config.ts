import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
