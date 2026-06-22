import type { Metadata } from "next";

const siteUrl = "https://lombokbangunan.com";

export type ServiceAreaData = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroDescription: string;
  introTitle: string;
  introBody: string;
  localNeeds: string[];
  serviceHighlights: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedAreas: string[];
};

export const serviceAreas: Record<string, ServiceAreaData> = {
  labuapi: {
    slug: "labuapi",
    name: "Labuapi",
    seoTitle: "Toko Bangunan Labuapi Lombok Barat | Kholid Jaya",
    seoDescription:
      "Kholid Jaya melayani kebutuhan material bangunan di Labuapi, Lombok Barat untuk rumah, toko, dan proyek dengan stok lengkap dan pengiriman cepat.",
    heroTitle: "Material Bangunan untuk Area Labuapi, Lombok Barat",
    heroDescription:
      "Kami melayani kebutuhan material bangunan untuk rumah tinggal, toko, renovasi, dan proyek di Labuapi dengan pilihan produk lengkap dan layanan pengiriman.",
    introTitle: "Layanan Material Bangunan Dekat Labuapi",
    introBody:
      "Sebagai toko bangunan yang berada di wilayah Perampuan, kami berada dekat dengan kebutuhan pelanggan di Kecamatan Labuapi. Anda dapat memesan semen, besi, baja ringan, atap spandek, cat, material listrik, dan alat pertukangan untuk kebutuhan bangunan baru maupun renovasi.",
    localNeeds: [
      "Material bangunan untuk rumah tinggal dan renovasi",
      "Kebutuhan tukang dan proyek lingkungan sekitar Labuapi",
      "Pengiriman material untuk area Perampuan dan sekitarnya",
      "Pembelian ecer maupun kebutuhan proyek skala menengah",
    ],
    serviceHighlights: [
      "Lokasi dekat untuk kebutuhan bangunan di Labuapi",
      "Bisa konsultasi stok dan jenis material melalui WhatsApp",
      "Cocok untuk pelanggan rumah tangga, tukang, dan proyek lokal",
    ],
    faqs: [
      {
        question: "Apakah Kholid Jaya melayani pengiriman ke Labuapi?",
        answer:
          "Ya. Kami melayani pengiriman material bangunan ke area Labuapi dan sekitarnya sesuai kebutuhan pesanan Anda.",
      },
      {
        question: "Bisa pesan material untuk renovasi rumah di Labuapi?",
        answer:
          "Bisa. Kami melayani kebutuhan renovasi rumah, toko, dan bangunan usaha dengan pilihan produk yang menyesuaikan pekerjaan Anda.",
      },
      {
        question: "Bagaimana cara mengecek stok untuk area Labuapi?",
        answer:
          "Silakan hubungi kami melalui WhatsApp agar kami bantu cek stok, jenis material, dan pengiriman ke lokasi Anda.",
      },
    ],
    relatedAreas: ["gerung", "kediri", "kuripan"],
  },
  gerung: {
    slug: "gerung",
    name: "Gerung",
    seoTitle: "Toko Bangunan Gerung Lombok Barat | Kholid Jaya",
    seoDescription:
      "Kholid Jaya melayani pembelian material bangunan untuk area Gerung, Lombok Barat dengan produk lengkap, harga bersaing, dan pengiriman cepat.",
    heroTitle: "Layanan Toko Bangunan untuk Area Gerung",
    heroDescription:
      "Kebutuhan material bangunan untuk rumah, toko, gudang, dan proyek di Gerung dapat dipenuhi lebih praktis melalui Kholid Jaya.",
    introTitle: "Pilihan Material Bangunan untuk Gerung dan Sekitarnya",
    introBody:
      "Kami membantu pelanggan di Gerung mendapatkan material bangunan yang sesuai untuk pembangunan baru, perbaikan rumah, dan pekerjaan proyek. Produk yang tersedia mencakup kebutuhan dasar, struktur, atap, finishing, hingga peralatan kerja.",
    localNeeds: [
      "Material bangunan untuk rumah dan ruko di Gerung",
      "Kebutuhan proyek dan pembangunan skala menengah",
      "Pengiriman material ke lokasi pekerjaan di Gerung",
      "Pembelian produk struktur, atap, dan finishing",
    ],
    serviceHighlights: [
      "Melayani kebutuhan material untuk pembangunan rumah dan usaha",
      "Bisa konsultasi pembelian agar material lebih tepat guna",
      "Pengiriman ke area Gerung dan Lombok Barat",
    ],
    faqs: [
      {
        question: "Apakah bisa beli material bangunan untuk proyek di Gerung?",
        answer:
          "Bisa. Kami melayani kebutuhan proyek rumah, ruko, gudang, dan pekerjaan konstruksi lain di area Gerung.",
      },
      {
        question: "Produk apa saja yang paling sering dipesan untuk Gerung?",
        answer:
          "Pelanggan biasanya menanyakan semen, besi, baja ringan, atap spandek, cat, dan material listrik sesuai kebutuhan proyek masing-masing.",
      },
      {
        question: "Apakah saya bisa minta pengiriman ke lokasi bangunan?",
        answer:
          "Ya. Kami melayani pengiriman ke area Gerung untuk membantu kebutuhan material sampai ke lokasi pekerjaan.",
      },
    ],
    relatedAreas: ["labuapi", "kediri", "lembar"],
  },
  kediri: {
    slug: "kediri",
    name: "Kediri",
    seoTitle: "Toko Bangunan Kediri Lombok Barat | Kholid Jaya",
    seoDescription:
      "Kholid Jaya melayani kebutuhan toko bangunan untuk area Kediri, Lombok Barat dengan stok material lengkap untuk rumah, toko, dan proyek.",
    heroTitle: "Kebutuhan Material Bangunan untuk Kediri",
    heroDescription:
      "Kami membantu pelanggan di Kediri, Lombok Barat mendapatkan material bangunan lengkap untuk pembangunan rumah, renovasi, dan proyek lingkungan sekitar.",
    introTitle: "Belanja Material Bangunan Lebih Praktis untuk Kediri",
    introBody:
      "Bagi pelanggan di Kediri, kami menyediakan pilihan material bangunan yang cocok untuk kebutuhan rumah tinggal, bangunan usaha, dan proyek harian. Anda dapat membeli material utama maupun pelengkap pekerjaan dalam satu tempat.",
    localNeeds: [
      "Kebutuhan semen, besi, dan baja untuk pembangunan rumah",
      "Material atap dan finishing untuk renovasi bangunan",
      "Peralatan kerja dan material listrik untuk pekerjaan lapangan",
      "Pengiriman material ke area Kediri dan sekitarnya",
    ],
    serviceHighlights: [
      "Memudahkan belanja material dalam satu toko",
      "Cocok untuk kebutuhan rumah tangga dan tukang harian",
      "Bisa dikonsultasikan sesuai jenis pekerjaan Anda",
    ],
    faqs: [
      {
        question: "Apakah Kholid Jaya melayani pelanggan dari Kediri?",
        answer:
          "Ya. Kami melayani pelanggan dari Kediri untuk kebutuhan material bangunan rumah, renovasi, dan pekerjaan proyek.",
      },
      {
        question: "Bisakah saya membeli sedikit demi sedikit untuk renovasi?",
        answer:
          "Bisa. Kami melayani pembelian menyesuaikan kebutuhan pekerjaan, baik untuk pembelian ecer maupun kebutuhan lebih besar.",
      },
      {
        question: "Bagaimana cara cepat menanyakan kebutuhan material untuk Kediri?",
        answer:
          "Silakan hubungi WhatsApp kami agar tim membantu menyiapkan informasi stok dan pengiriman ke area Kediri.",
      },
    ],
    relatedAreas: ["labuapi", "kuripan", "gerung"],
  },
  kuripan: {
    slug: "kuripan",
    name: "Kuripan",
    seoTitle: "Toko Bangunan Kuripan Lombok Barat | Kholid Jaya",
    seoDescription:
      "Kholid Jaya melayani kebutuhan material bangunan untuk area Kuripan, Lombok Barat dengan pilihan lengkap untuk rumah dan proyek.",
    heroTitle: "Layanan Material Bangunan untuk Kuripan",
    heroDescription:
      "Pelanggan di Kuripan dapat memesan kebutuhan bangunan seperti semen, besi, atap, cat, dan alat pertukangan melalui Kholid Jaya.",
    introTitle: "Dukungan Material Bangunan untuk Rumah dan Renovasi di Kuripan",
    introBody:
      "Kami menyiapkan material bangunan untuk kebutuhan pelanggan di Kuripan yang sedang membangun rumah, memperbaiki bangunan lama, atau menyiapkan proyek lingkungan sekitar. Produk yang tersedia bisa dipilih sesuai pekerjaan Anda.",
    localNeeds: [
      "Material rumah tinggal dan renovasi bangunan",
      "Kebutuhan struktur dan atap untuk pekerjaan baru",
      "Produk finishing dan peralatan untuk tukang",
      "Pengiriman material ke area Kuripan dan sekitarnya",
    ],
    serviceHighlights: [
      "Melayani kebutuhan bangunan harian sampai proyek menengah",
      "Bisa tanya stok dan rekomendasi pembelian lewat WhatsApp",
      "Produk lengkap untuk rumah, toko, dan pekerjaan lapangan",
    ],
    faqs: [
      {
        question: "Apakah bisa pesan material untuk renovasi rumah di Kuripan?",
        answer:
          "Bisa. Kami melayani kebutuhan renovasi rumah dan bangunan lain di area Kuripan sesuai jenis pekerjaan Anda.",
      },
      {
        question: "Apakah tersedia alat pertukangan untuk tukang di Kuripan?",
        answer:
          "Ya. Kami menyediakan alat pertukangan dan material pelengkap untuk kebutuhan kerja tukang dan proyek kecil.",
      },
      {
        question: "Apakah pengiriman ke Kuripan tersedia?",
        answer:
          "Ya. Kami melayani pengiriman ke area Kuripan dan wilayah sekitar di Lombok Barat.",
      },
    ],
    relatedAreas: ["kediri", "labuapi", "lembar"],
  },
  lembar: {
    slug: "lembar",
    name: "Lembar",
    seoTitle: "Toko Bangunan Lembar Lombok Barat | Kholid Jaya",
    seoDescription:
      "Kholid Jaya melayani kebutuhan toko bangunan untuk area Lembar, Lombok Barat dengan produk lengkap untuk rumah, gudang, dan proyek.",
    heroTitle: "Kebutuhan Material Bangunan untuk Area Lembar",
    heroDescription:
      "Kami membantu pelanggan di Lembar mendapatkan material bangunan yang lengkap untuk rumah, gudang, toko, dan proyek lokal di Lombok Barat.",
    introTitle: "Material Bangunan Lengkap untuk Lembar dan Sekitarnya",
    introBody:
      "Kebutuhan pembangunan dan renovasi di Lembar memerlukan material yang mudah didapat dan siap dikirim. Kholid Jaya menyediakan produk utama untuk pekerjaan struktur, atap, finishing, kelistrikan, dan alat kerja dalam satu tempat.",
    localNeeds: [
      "Kebutuhan bangunan rumah dan gudang di Lembar",
      "Material untuk proyek lokal dan bangunan usaha",
      "Atap, baja ringan, dan material finishing",
      "Pengiriman material bangunan ke area Lembar",
    ],
    serviceHighlights: [
      "Melayani kebutuhan bangunan rumah dan usaha di Lembar",
      "Bisa membantu menyiapkan material sesuai jenis pekerjaan",
      "Cocok untuk pelanggan proyek kecil hingga menengah",
    ],
    faqs: [
      {
        question: "Apakah Kholid Jaya melayani area Lembar?",
        answer:
          "Ya. Kami melayani kebutuhan material bangunan untuk area Lembar dan wilayah sekitarnya di Lombok Barat.",
      },
      {
        question: "Bisakah saya memesan material untuk bangunan usaha di Lembar?",
        answer:
          "Bisa. Kami melayani kebutuhan toko, gudang, ruko, dan bangunan usaha lain dengan produk yang menyesuaikan kebutuhan Anda.",
      },
      {
        question: "Bagaimana cara memesan material untuk area Lembar?",
        answer:
          "Silakan hubungi kami melalui WhatsApp untuk menanyakan stok, jenis material, dan pengiriman ke lokasi bangunan Anda.",
      },
    ],
    relatedAreas: ["gerung", "kuripan", "labuapi"],
  },
};

export const serviceAreaList = Object.values(serviceAreas);

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas[slug];
}

export function getServiceAreaMetadata(data: ServiceAreaData): Metadata {
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    alternates: {
      canonical: `/area-layanan/${data.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${siteUrl}/area-layanan/${data.slug}`,
      title: data.seoTitle,
      description: data.seoDescription,
      images: [
        {
          url: "/hero-bg.jpg",
          width: 1200,
          height: 630,
          alt: `Layanan toko bangunan ${data.name} Lombok Barat`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.seoTitle,
      description: data.seoDescription,
      images: ["/hero-bg.jpg"],
    },
  };
}
