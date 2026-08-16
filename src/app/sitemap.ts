import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dahicheenicatering.com";
  const currentDate = new Date();

  const routes = [
    { url: "", changeFrequency: "daily" as const, priority: 1.0 },
    { url: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/menu", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/faq", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/qet_a_quote", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
    { url: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },

    // Location Landing Pages (High Priority for Local SEO)
    { url: "/delhi", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/gurugram", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/noida", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/faridabad", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/ghaziabad", changeFrequency: "weekly" as const, priority: 0.9 },

    // Occasions Pages
    { url: "/occasions_we_serve", changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "/occasions_we_serve/baby-shower-catering", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/occasions_we_serve/baby_shower", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/occasions_we_serve/family-gathering-catering", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/occasions_we_serve/family_gatherings", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/occasions_we_serve/griha-pravesh-catering", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/occasions_we_serve/griha_pravesh", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/occasions_we_serve/pooja-havan-catering", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/occasions_we_serve/pooja_havan", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/occasions_we_serve/prayer-meeting-catering", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/occasions_we_serve/prayer_meetings", changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
