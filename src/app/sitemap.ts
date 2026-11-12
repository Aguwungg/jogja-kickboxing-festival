import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://jogjakickboxingfestival.com");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/whats-new", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/championship", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/venue", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/tentang", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/faq", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/kontak", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/kebijakan-privasi", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/syarat-ketentuan", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

