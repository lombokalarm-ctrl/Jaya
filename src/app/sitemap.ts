import type { MetadataRoute } from "next";
import { categoryPageList } from "@/lib/category-pages";
import { serviceAreaList } from "@/lib/service-areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://lombokbangunan.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        "https://lombokbangunan.com/hero-bg.jpg",
        "https://lombokbangunan.com/product-semen.jpg",
        "https://lombokbangunan.com/product-besi.jpg",
        "https://lombokbangunan.com/product-bajaringan.jpg",
        "https://lombokbangunan.com/product-atap.jpg",
        "https://lombokbangunan.com/product-cat.jpg",
        "https://lombokbangunan.com/product-listrik.jpg",
        "https://lombokbangunan.com/product-alat.jpg",
      ],
    },
    {
      url: "https://lombokbangunan.com/area-layanan",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
      images: ["https://lombokbangunan.com/hero-bg.jpg"],
    },
    ...categoryPageList.map((page) => ({
      url: `https://lombokbangunan.com/${page.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: [`https://lombokbangunan.com${page.image}`],
    })),
    ...serviceAreaList.map((area) => ({
      url: `https://lombokbangunan.com/area-layanan/${area.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: ["https://lombokbangunan.com/hero-bg.jpg"],
    })),
  ];
}
