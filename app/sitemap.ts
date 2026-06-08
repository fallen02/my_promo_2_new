import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mypromo.in";

  return [
    "",
    "/about-us",
    "/contact-us",
    "/faq",
    "/portfolio",
    "/privacy-policy",
    "/services",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}