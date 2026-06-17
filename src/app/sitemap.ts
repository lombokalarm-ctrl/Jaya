import type { MetadataRoute } from "next";

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
  ];
}
