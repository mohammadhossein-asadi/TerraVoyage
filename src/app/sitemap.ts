import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://terravoyage.app";

  const destinations = [
    "bali", "santorini", "kyoto", "machu-picchu", "swiss-alps",
    "maldives", "marrakech", "reykjavik", "cape-town", "barcelona",
    "tokyo", "new-york", "paris", "dubai", "patagonia",
    "amalfi-coast", "queenstown", "petra", "zanzibar",
  ];

  const accommodations = [
    "acc-1", "acc-2", "acc-3", "acc-4", "acc-5", "acc-6", "acc-7",
    "acc-8", "acc-9", "acc-10", "acc-11", "acc-12", "acc-13", "acc-14",
    "acc-15", "acc-16", "acc-17", "acc-18", "acc-19", "acc-20",
  ];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/destinations`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/accommodations`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/explore`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/trip-planner`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/dashboard`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    ...destinations.map((slug) => ({
      url: `${baseUrl}/destinations/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...accommodations.map((id) => ({
      url: `${baseUrl}/accommodations/${id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
