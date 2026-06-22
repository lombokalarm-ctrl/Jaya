import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Display } from "next/font/google";
import "./globals.css";

const siteUrl = "https://lombokbangunan.com";
const siteTitle = "Toko Bangunan Lombok Barat | Kholid Jaya";
const siteDescription =
  "Kholid Jaya adalah toko bangunan di Lombok Barat yang menyediakan semen, besi, baja ringan, spandek, cat, material listrik, dan alat pertukangan dengan harga bersaing.";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  name: "Kholid Jaya Bangunan",
  url: siteUrl,
  image: `${siteUrl}/hero-bg.jpg`,
  description: siteDescription,
  telephone: "+62-878-6555-7001",
  email: "order@lombokbangunan.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. KH Ahmad Dahlan, Desa Perampuan",
    addressLocality: "Lombok Barat",
    addressRegion: "Nusa Tenggara Barat",
    addressCountry: "ID",
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Lombok Barat",
    },
    {
      "@type": "AdministrativeArea",
      name: "Nusa Tenggara Barat",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+62-878-6555-7001",
      contactType: "customer service",
      areaServed: "ID-NTB",
      availableLanguage: ["id"],
    },
  ],
};

const notoSans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const notoDisplay = Noto_Sans_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: [{ url: "/favicon-kjb.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon-kjb.svg"],
  },
  keywords: [
    "toko bangunan lombok barat",
    "material bangunan lombok barat",
    "semen lombok barat",
    "besi beton lombok barat",
    "baja ringan lombok barat",
    "atap spandek lombok barat",
    "cat bangunan lombok barat",
    "alat listrik lombok barat",
    "Kholid Jaya",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Kholid Jaya Bangunan",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Kholid Jaya toko bangunan di Lombok Barat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${notoSans.variable} ${notoDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
