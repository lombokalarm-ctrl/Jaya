import type { Metadata } from "next";

const siteUrl = "https://lombokbangunan.com";

export type CategoryPageData = {
  slug: string;
  title: string;
  shortTitle: string;
  heroTitle: string;
  heroDescription: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageAlt: string;
  introTitle: string;
  introBody: string;
  items: string[];
  applications: string[];
  highlights: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedSlugs: string[];
};

export const categoryPages: Record<string, CategoryPageData> = {
  "semen-beton": {
    slug: "semen-beton",
    title: "Semen & Beton",
    shortTitle: "Semen",
    heroTitle: "Jual Semen dan Beton di Lombok Barat",
    heroDescription:
      "Kholid Jaya menyediakan semen Portland, beton instan, dan material dasar bangunan untuk kebutuhan rumah, toko, dan proyek di Lombok Barat.",
    seoTitle: "Jual Semen dan Beton Lombok Barat | Kholid Jaya",
    seoDescription:
      "Cari toko semen di Lombok Barat? Kholid Jaya menyediakan semen Portland, beton instan, dan material dasar bangunan dengan harga bersaing dan layanan pengiriman.",
    image: "/product-semen.jpg",
    imageAlt: "Semen dan beton untuk proyek bangunan di Lombok Barat",
    introTitle: "Kebutuhan Material Dasar untuk Fondasi yang Kokoh",
    introBody:
      "Kami melayani kebutuhan semen dan beton untuk pembangunan rumah, ruko, renovasi, hingga proyek skala menengah di Lombok Barat. Tim kami siap membantu memilih material yang sesuai agar pekerjaan lebih efisien dan hasil bangunan lebih tahan lama.",
    items: [
      "Semen Portland untuk pekerjaan struktur dan pasangan",
      "Beton instan untuk pengecoran praktis",
      "Material dasar pendukung pekerjaan pondasi",
      "Pilihan produk untuk renovasi rumah dan proyek baru",
    ],
    applications: [
      "Fondasi rumah tinggal",
      "Pengecoran lantai dan dak",
      "Pekerjaan pasangan bata dan plester",
      "Proyek renovasi dan perluasan bangunan",
    ],
    highlights: [
      "Siap melayani pembelian untuk kebutuhan ecer maupun proyek",
      "Bisa konsultasi jenis semen yang cocok untuk pekerjaan Anda",
      "Pengiriman ke area Lombok Barat dan sekitarnya",
    ],
    faqs: [
      {
        question: "Apakah bisa pesan semen untuk proyek rumah tinggal?",
        answer:
          "Bisa. Kami melayani pembelian semen untuk rumah tinggal, renovasi, ruko, dan kebutuhan proyek dengan jumlah yang menyesuaikan kebutuhan Anda.",
      },
      {
        question: "Apakah tersedia layanan pengiriman di Lombok Barat?",
        answer:
          "Ya. Kami melayani pengiriman ke area Lombok Barat sehingga material lebih cepat sampai ke lokasi pekerjaan.",
      },
      {
        question: "Bisa konsultasi kebutuhan sebelum membeli?",
        answer:
          "Bisa. Anda dapat menghubungi kami melalui WhatsApp untuk menanyakan jenis material yang paling sesuai dengan pekerjaan Anda.",
      },
    ],
    relatedSlugs: ["besi-baja", "baja-ringan", "atap-spandek"],
  },
  "besi-baja": {
    slug: "besi-baja",
    title: "Besi & Baja",
    shortTitle: "Besi & Baja",
    heroTitle: "Jual Besi dan Baja di Lombok Barat",
    heroDescription:
      "Kholid Jaya menyediakan besi beton, wiremesh, dan material baja untuk kebutuhan struktur bangunan yang kuat dan tahan lama di Lombok Barat.",
    seoTitle: "Jual Besi dan Baja Lombok Barat | Kholid Jaya",
    seoDescription:
      "Cari besi beton dan baja di Lombok Barat? Kholid Jaya menyediakan material struktur bangunan untuk rumah, ruko, dan proyek dengan harga bersaing.",
    image: "/product-besi.jpg",
    imageAlt: "Besi dan baja untuk konstruksi bangunan di Lombok Barat",
    introTitle: "Material Struktur Bangunan untuk Konstruksi yang Aman",
    introBody:
      "Untuk pekerjaan struktur, pemilihan besi dan baja yang tepat sangat menentukan kekuatan bangunan. Kami membantu Anda menyiapkan material yang sesuai untuk pembangunan rumah, gedung kecil, gudang, dan proyek konstruksi lainnya.",
    items: [
      "Besi beton untuk struktur bangunan",
      "Wiremesh untuk pengecoran dan penguatan",
      "Material baja untuk pekerjaan rangka dan struktur",
      "Pilihan sesuai kebutuhan proyek skala kecil hingga menengah",
    ],
    applications: [
      "Struktur rumah tinggal",
      "Kolom, balok, dan pelat beton",
      "Pekerjaan gudang dan bangunan komersial ringan",
      "Kebutuhan renovasi struktur",
    ],
    highlights: [
      "Cocok untuk kebutuhan tukang, kontraktor, dan pemilik rumah",
      "Bisa konsultasi jumlah dan jenis material yang dibutuhkan",
      "Tersedia layanan pengiriman ke lokasi proyek",
    ],
    faqs: [
      {
        question: "Apakah tersedia besi untuk pembangunan rumah dua lantai?",
        answer:
          "Kami menyediakan material besi dan baja untuk berbagai kebutuhan struktur, termasuk pembangunan rumah bertingkat dan renovasi bangunan.",
      },
      {
        question: "Apakah saya bisa beli dalam jumlah proyek?",
        answer:
          "Bisa. Kami melayani pembelian untuk kebutuhan proyek dengan jumlah yang menyesuaikan pekerjaan Anda.",
      },
      {
        question: "Bagaimana cara menanyakan stok besi dan baja?",
        answer:
          "Silakan hubungi WhatsApp kami untuk menanyakan ketersediaan material, kebutuhan proyek, dan pengiriman ke lokasi Anda.",
      },
    ],
    relatedSlugs: ["semen-beton", "baja-ringan", "atap-spandek"],
  },
  "baja-ringan": {
    slug: "baja-ringan",
    title: "Baja Ringan",
    shortTitle: "Baja Ringan",
    heroTitle: "Jual Baja Ringan di Lombok Barat",
    heroDescription:
      "Kholid Jaya menyediakan baja ringan untuk rangka atap yang kuat, rapi, dan tahan lama bagi kebutuhan rumah tinggal maupun proyek di Lombok Barat.",
    seoTitle: "Jual Baja Ringan Lombok Barat | Kholid Jaya",
    seoDescription:
      "Butuh baja ringan di Lombok Barat? Kholid Jaya melayani kebutuhan rangka atap baja ringan untuk rumah, renovasi, dan proyek dengan layanan konsultasi dan pengiriman.",
    image: "/product-bajaringan.jpg",
    imageAlt: "Baja ringan untuk rangka atap rumah di Lombok Barat",
    introTitle: "Solusi Rangka Atap yang Praktis dan Tahan Lama",
    introBody:
      "Baja ringan menjadi pilihan banyak pemilik rumah dan pelaksana proyek karena kuat, tahan karat, dan lebih efisien dalam pemasangan. Kami membantu Anda menyiapkan material yang cocok untuk kebutuhan atap rumah tinggal dan bangunan usaha.",
    items: [
      "Material baja ringan untuk rangka atap",
      "Pilihan untuk rumah tinggal dan bangunan usaha",
      "Cocok untuk pembangunan baru maupun renovasi atap",
      "Bisa disesuaikan dengan kebutuhan pekerjaan di lapangan",
    ],
    applications: [
      "Rangka atap rumah tinggal",
      "Renovasi atap bangunan lama",
      "Kanopi dan struktur atap ringan",
      "Bangunan usaha skala kecil dan menengah",
    ],
    highlights: [
      "Lebih praktis untuk kebutuhan atap modern",
      "Bisa konsultasi kebutuhan sebelum pembelian",
      "Siap kirim ke area Lombok Barat dan sekitar",
    ],
    faqs: [
      {
        question: "Apakah baja ringan cocok untuk rumah tinggal?",
        answer:
          "Ya. Baja ringan cocok untuk rumah tinggal karena kuat, rapi, dan lebih efisien untuk kebutuhan rangka atap.",
      },
      {
        question: "Apakah bisa untuk renovasi atap lama?",
        answer:
          "Bisa. Banyak pelanggan menggunakan baja ringan untuk renovasi atap agar struktur lebih ringan dan tahan lama.",
      },
      {
        question: "Bagaimana cara order baja ringan?",
        answer:
          "Anda bisa menghubungi WhatsApp kami untuk menanyakan stok, kebutuhan material, dan pengiriman ke lokasi proyek Anda.",
      },
    ],
    relatedSlugs: ["atap-spandek", "besi-baja", "semen-beton"],
  },
  "atap-spandek": {
    slug: "atap-spandek",
    title: "Atap Spandek",
    shortTitle: "Atap Spandek",
    heroTitle: "Jual Atap Spandek di Lombok Barat",
    heroDescription:
      "Kholid Jaya menyediakan atap spandek untuk rumah, gudang, toko, dan bangunan usaha dengan layanan konsultasi dan pengiriman di Lombok Barat.",
    seoTitle: "Jual Atap Spandek Lombok Barat | Kholid Jaya",
    seoDescription:
      "Cari atap spandek di Lombok Barat? Kholid Jaya menyediakan atap spandek untuk rumah, gudang, dan bangunan usaha dengan harga bersaing dan pengiriman cepat.",
    image: "/product-atap.jpg",
    imageAlt: "Atap spandek untuk bangunan rumah dan gudang di Lombok Barat",
    introTitle: "Pilihan Atap Praktis untuk Hunian dan Bangunan Usaha",
    introBody:
      "Atap spandek banyak dipilih karena pemasangannya praktis, tampilannya rapi, dan cocok untuk berbagai jenis bangunan. Kami membantu Anda menyiapkan kebutuhan atap untuk rumah tinggal, gudang, kios, dan area usaha di Lombok Barat.",
    items: [
      "Atap spandek untuk rumah dan bangunan usaha",
      "Pilihan untuk kebutuhan atap baru atau penggantian atap lama",
      "Cocok untuk gudang, kios, dan area komersial",
      "Bisa dipadukan dengan kebutuhan rangka atap",
    ],
    applications: [
      "Atap rumah tinggal",
      "Gudang dan bangunan komersial",
      "Kios, ruko, dan area usaha",
      "Renovasi atap bangunan lama",
    ],
    highlights: [
      "Cocok untuk kebutuhan proyek rumah dan bangunan usaha",
      "Bisa konsultasi kebutuhan atap dan material pendukung",
      "Pengiriman melayani area Lombok Barat",
    ],
    faqs: [
      {
        question: "Apakah atap spandek cocok untuk bangunan usaha?",
        answer:
          "Ya. Atap spandek cocok untuk bangunan usaha seperti kios, gudang, dan ruko karena pemasangannya praktis dan tampilannya rapi.",
      },
      {
        question: "Bisa pesan atap untuk renovasi rumah?",
        answer:
          "Bisa. Kami melayani kebutuhan atap spandek untuk renovasi rumah maupun pembangunan baru.",
      },
      {
        question: "Apakah bisa sekalian konsultasi dengan baja ringan?",
        answer:
          "Bisa. Anda dapat menanyakan kebutuhan atap spandek sekaligus material baja ringan agar pembelian lebih sesuai dengan proyek Anda.",
      },
    ],
    relatedSlugs: ["baja-ringan", "besi-baja", "semen-beton"],
  },
  "cat-pelitur": {
    slug: "cat-pelitur",
    title: "Cat & Pelitur",
    shortTitle: "Cat & Pelitur",
    heroTitle: "Jual Cat dan Pelitur di Lombok Barat",
    heroDescription:
      "Kholid Jaya menyediakan cat bangunan dan pelitur untuk interior, eksterior, serta finishing kayu bagi rumah dan proyek di Lombok Barat.",
    seoTitle: "Jual Cat dan Pelitur Lombok Barat | Kholid Jaya",
    seoDescription:
      "Cari toko cat bangunan di Lombok Barat? Kholid Jaya menyediakan cat interior, cat eksterior, dan pelitur kayu dengan harga bersaing dan layanan konsultasi.",
    image: "/product-cat.jpg",
    imageAlt: "Cat bangunan dan pelitur untuk finishing rumah di Lombok Barat",
    introTitle: "Finishing Bangunan yang Rapi dan Tahan Lama",
    introBody:
      "Pemilihan cat dan pelitur yang tepat membantu menjaga tampilan bangunan tetap rapi sekaligus melindungi permukaan dinding dan kayu. Kami melayani kebutuhan finishing untuk rumah tinggal, toko, renovasi, dan proyek bangunan di Lombok Barat.",
    items: [
      "Cat interior untuk hunian dan ruang usaha",
      "Cat eksterior untuk perlindungan dinding luar",
      "Pelitur kayu untuk finishing furnitur dan kusen",
      "Pilihan produk untuk renovasi maupun bangunan baru",
    ],
    applications: [
      "Pengecatan rumah tinggal",
      "Finishing toko, ruko, dan ruang usaha",
      "Pelapisan kusen, pintu, dan elemen kayu",
      "Perawatan ulang bangunan lama",
    ],
    highlights: [
      "Membantu pelanggan memilih produk finishing yang sesuai",
      "Cocok untuk kebutuhan rumah, toko, dan proyek renovasi",
      "Siap melayani pembelian dan pengiriman di Lombok Barat",
    ],
    faqs: [
      {
        question: "Apakah tersedia cat untuk interior dan eksterior?",
        answer:
          "Ya. Kami melayani kebutuhan cat untuk area dalam ruangan maupun luar bangunan sesuai jenis pekerjaan Anda.",
      },
      {
        question: "Apakah pelitur bisa untuk kusen dan furnitur kayu?",
        answer:
          "Bisa. Pelitur cocok untuk finishing kayu seperti kusen, pintu, dan elemen furnitur agar tampil lebih rapi dan terlindungi.",
      },
      {
        question: "Bisakah saya konsultasi dulu sebelum membeli cat?",
        answer:
          "Bisa. Anda dapat menghubungi kami melalui WhatsApp untuk menanyakan kebutuhan cat, pelitur, dan produk pendukung lainnya.",
      },
    ],
    relatedSlugs: ["semen-beton", "alat-pertukangan", "peralatan-listrik"],
  },
  "peralatan-listrik": {
    slug: "peralatan-listrik",
    title: "Peralatan Listrik",
    shortTitle: "Peralatan Listrik",
    heroTitle: "Jual Peralatan Listrik di Lombok Barat",
    heroDescription:
      "Kholid Jaya menyediakan kabel, saklar, stop kontak, dan material listrik untuk rumah, toko, serta proyek renovasi di Lombok Barat.",
    seoTitle: "Jual Peralatan Listrik Lombok Barat | Kholid Jaya",
    seoDescription:
      "Butuh peralatan listrik di Lombok Barat? Kholid Jaya menyediakan kabel, saklar, stop kontak, dan komponen listrik untuk kebutuhan rumah dan proyek.",
    image: "/product-listrik.jpg",
    imageAlt: "Peralatan listrik untuk rumah dan bangunan di Lombok Barat",
    introTitle: "Kebutuhan Kelistrikan untuk Rumah dan Proyek",
    introBody:
      "Kami membantu pelanggan menyiapkan material listrik untuk instalasi baru, renovasi, dan perbaikan bangunan. Produk yang tersedia cocok untuk kebutuhan rumah tinggal, ruko, dan bangunan usaha di Lombok Barat.",
    items: [
      "Kabel untuk kebutuhan instalasi bangunan",
      "Saklar dan stop kontak",
      "Komponen listrik untuk rumah dan toko",
      "Pilihan produk untuk pekerjaan instalasi baru dan renovasi",
    ],
    applications: [
      "Instalasi listrik rumah tinggal",
      "Renovasi instalasi listrik bangunan lama",
      "Kebutuhan listrik untuk ruko dan toko",
      "Perbaikan area listrik bangunan usaha",
    ],
    highlights: [
      "Cocok untuk kebutuhan teknisi, tukang, dan pemilik rumah",
      "Bisa konsultasi kebutuhan material listrik dasar",
      "Melayani pembelian untuk renovasi maupun proyek baru",
    ],
    faqs: [
      {
        question: "Apakah tersedia material listrik untuk rumah tinggal?",
        answer:
          "Ya. Kami menyediakan material listrik dasar untuk rumah tinggal, renovasi, dan kebutuhan bangunan usaha.",
      },
      {
        question: "Bisakah saya beli untuk proyek renovasi kecil?",
        answer:
          "Bisa. Kami melayani kebutuhan proyek kecil hingga menengah sesuai material yang Anda perlukan.",
      },
      {
        question: "Bagaimana cara menanyakan stok peralatan listrik?",
        answer:
          "Anda bisa menghubungi kami melalui WhatsApp untuk mengecek kebutuhan material listrik dan ketersediaannya.",
      },
    ],
    relatedSlugs: ["alat-pertukangan", "cat-pelitur", "semen-beton"],
  },
  "alat-pertukangan": {
    slug: "alat-pertukangan",
    title: "Alat Pertukangan",
    shortTitle: "Alat Pertukangan",
    heroTitle: "Jual Alat Pertukangan di Lombok Barat",
    heroDescription:
      "Kholid Jaya menyediakan alat pertukangan untuk pekerjaan bangunan, renovasi rumah, dan kebutuhan tukang di Lombok Barat.",
    seoTitle: "Jual Alat Pertukangan Lombok Barat | Kholid Jaya",
    seoDescription:
      "Cari alat pertukangan di Lombok Barat? Kholid Jaya menyediakan peralatan kerja untuk tukang, renovasi rumah, dan proyek bangunan dengan harga bersaing.",
    image: "/product-alat.jpg",
    imageAlt: "Alat pertukangan untuk proyek bangunan di Lombok Barat",
    introTitle: "Peralatan Kerja untuk Tukang dan Renovasi Bangunan",
    introBody:
      "Alat pertukangan yang tepat membantu pekerjaan menjadi lebih cepat, rapi, dan efisien. Kami melayani kebutuhan alat kerja untuk tukang, renovasi rumah, serta proyek pembangunan di Lombok Barat.",
    items: [
      "Peralatan tangan untuk pekerjaan bangunan",
      "Alat kerja untuk tukang dan renovasi rumah",
      "Pilihan peralatan untuk pekerjaan dasar hingga finishing",
      "Kebutuhan alat untuk rumah, toko, dan proyek lapangan",
    ],
    applications: [
      "Pekerjaan tukang harian",
      "Renovasi rumah tinggal",
      "Pembangunan dan perbaikan bangunan usaha",
      "Pekerjaan finishing dan perawatan bangunan",
    ],
    highlights: [
      "Melayani kebutuhan tukang, pemilik rumah, dan proyek kecil",
      "Cocok untuk pembelian alat kerja sehari-hari",
      "Bisa dikombinasikan dengan pembelian material bangunan lain",
    ],
    faqs: [
      {
        question: "Apakah alat pertukangan bisa dibeli untuk kebutuhan rumah?",
        answer:
          "Bisa. Kami melayani pembelian alat pertukangan untuk kebutuhan rumah tangga, renovasi, maupun pekerjaan tukang profesional.",
      },
      {
        question: "Apakah tersedia alat untuk proyek bangunan kecil?",
        answer:
          "Ya. Produk yang kami sediakan cocok untuk pekerjaan proyek kecil, renovasi, dan kebutuhan kerja harian.",
      },
      {
        question: "Bisakah saya sekalian pesan material lain?",
        answer:
          "Bisa. Anda dapat membeli alat pertukangan bersamaan dengan material bangunan lain sesuai kebutuhan proyek Anda.",
      },
    ],
    relatedSlugs: ["peralatan-listrik", "cat-pelitur", "besi-baja"],
  },
};

export const categoryPageList = Object.values(categoryPages);

export function getCategoryBySlug(slug: string) {
  return categoryPages[slug];
}

export function getCategoryMetadata(data: CategoryPageData): Metadata {
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    alternates: {
      canonical: `/${data.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${siteUrl}/${data.slug}`,
      title: data.seoTitle,
      description: data.seoDescription,
      images: [
        {
          url: data.image,
          width: 1200,
          height: 630,
          alt: data.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.seoTitle,
      description: data.seoDescription,
      images: [data.image],
    },
  };
}
