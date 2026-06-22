import Image from "next/image";
import Link from "next/link";

import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import { type CategoryPageData, getCategoryBySlug } from "@/lib/category-pages";

type CategoryPageProps = {
  data: CategoryPageData;
};

export default function CategoryPage({ data }: CategoryPageProps) {
  const relatedCategories = data.relatedSlugs
    .map((slug) => getCategoryBySlug(slug))
    .filter((item): item is CategoryPageData => Boolean(item));

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: "https://lombokbangunan.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: data.title,
          item: `https://lombokbangunan.com/${data.slug}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <div className="relative bg-[#F5F3EE]">
      <GrainOverlay />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <header
        className="sticky top-0 z-[70] border-b border-black/8 bg-[#F5F3EE]/90 backdrop-blur-md"
      >
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-[clamp(1.25rem,4vw,3.5rem)]">
          <Link
            href="/"
            className="text-[#2D6A4F] font-extrabold text-[1.05rem] sm:text-[1.125rem] uppercase tracking-[0.12em]"
            style={{ fontFamily: "var(--font-display), var(--font-sans)" }}
          >
            KHOLID JAYA
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:inline-flex text-[#111111] font-medium hover:text-[#2D6A4F] transition-colors duration-300"
            >
              Kembali ke Beranda
            </Link>
            <a
              href="https://wa.me/6287865557001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#128C7E]"
            >
              Tanya via WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="overflow-hidden bg-[#141414] px-[clamp(1.25rem,5vw,4rem)] py-20 sm:py-24">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="mb-4 text-[0.875rem] font-semibold uppercase tracking-[0.12em] text-[#C9A227]">
                KATEGORI PRODUK
              </p>
              <h1
                className="mb-6 text-[#F5F3EE]"
                style={{
                  fontFamily: "var(--font-display), var(--font-sans)",
                  fontWeight: 800,
                  fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                {data.heroTitle}
              </h1>
              <p className="max-w-[620px] text-[1.075rem] leading-[1.85] text-[#D2D2D2]">
                {data.heroDescription}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/6287865557001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#C9A227] px-8 py-3.5 text-[1rem] font-semibold text-[#111111] transition-all duration-300 hover:bg-[#D4AF37]"
                >
                  Cek Stok & Harga
                </a>
                <Link
                  href="/#produk"
                  className="font-semibold text-white/90 underline decoration-white/30 underline-offset-4 transition-colors duration-300 hover:text-white hover:decoration-white/60"
                >
                  Lihat Kategori Lain
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-[28px] shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                <div className="relative aspect-[4/3]">
                  <Image
                    src={data.image}
                    alt={data.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[clamp(1.25rem,5vw,4rem)] py-20 sm:py-24">
          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="mb-4 block text-[0.875rem] font-semibold uppercase tracking-[0.12em] text-[#2D6A4F]">
                {data.shortTitle.toUpperCase()}
              </span>
              <h2
                className="mb-5 text-[#111111]"
                style={{
                  fontFamily: "var(--font-display), var(--font-sans)",
                  fontWeight: 800,
                  fontSize: "clamp(1.95rem, 4vw, 3rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                }}
              >
                {data.introTitle}
              </h2>
              <p className="text-[1.05rem] leading-[1.85] text-[#444444]">
                {data.introBody}
              </p>
            </div>

            <div className="lg:col-span-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-[24px] bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                <h3 className="mb-4 text-[1.125rem] font-bold text-[#111111]">
                  Produk yang Tersedia
                </h3>
                <ul className="space-y-3 text-[0.98rem] leading-[1.7] text-[#555555]">
                  {data.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[24px] bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                <h3 className="mb-4 text-[1.125rem] font-bold text-[#111111]">
                  Cocok untuk
                </h3>
                <ul className="space-y-3 text-[0.98rem] leading-[1.7] text-[#555555]">
                  {data.applications.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#E8E4DB] px-[clamp(1.25rem,5vw,4rem)] py-20 sm:py-24">
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-[760px]">
              <span className="mb-4 block text-[0.875rem] font-semibold uppercase tracking-[0.12em] text-[#2D6A4F]">
                KEUNGGULAN LAYANAN
              </span>
              <h2
                className="mb-5 text-[#111111]"
                style={{
                  fontFamily: "var(--font-display), var(--font-sans)",
                  fontWeight: 800,
                  fontSize: "clamp(1.95rem, 4vw, 3rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                }}
              >
                Belanja Material Bangunan Lebih Praktis
              </h2>
              <p className="text-[1.05rem] leading-[1.85] text-[#444444]">
                Kholid Jaya membantu pelanggan rumah tangga, tukang, dan proyek
                lokal menemukan material bangunan yang sesuai tanpa perlu
                berputar ke banyak tempat.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {data.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[24px] bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                >
                  <p className="text-[1rem] leading-[1.75] text-[#444444]">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[clamp(1.25rem,5vw,4rem)] py-20 sm:py-24">
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-[720px]">
              <span className="mb-4 block text-[0.875rem] font-semibold uppercase tracking-[0.12em] text-[#2D6A4F]">
                FAQ
              </span>
              <h2
                className="mb-6 text-[#111111]"
                style={{
                  fontFamily: "var(--font-display), var(--font-sans)",
                  fontWeight: 800,
                  fontSize: "clamp(1.95rem, 4vw, 3rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                }}
              >
                Pertanyaan yang Sering Ditanyakan
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {data.faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-[24px] bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                >
                  <h3 className="mb-3 text-[1.125rem] font-bold text-[#111111]">
                    {faq.question}
                  </h3>
                  <p className="text-[0.98rem] leading-[1.75] text-[#555555]">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#141414] px-[clamp(1.25rem,5vw,4rem)] py-20 sm:py-24">
          <div className="mx-auto max-w-[1280px]">
            <span className="mb-4 block text-[0.875rem] font-semibold uppercase tracking-[0.12em] text-[#C9A227]">
              KATEGORI TERKAIT
            </span>
            <h2
              className="mb-8 text-[#F5F3EE]"
              style={{
                fontFamily: "var(--font-display), var(--font-sans)",
                fontWeight: 800,
                fontSize: "clamp(1.95rem, 4vw, 3rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              Jelajahi Material Bangunan Lainnya
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedCategories.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="rounded-[24px] border border-white/10 bg-[#1E1E1E] p-7 transition-colors duration-300 hover:border-[#C9A227]/60 hover:bg-[#232323]"
                >
                  <p className="mb-2 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[#C9A227]">
                    Kategori Terkait
                  </p>
                  <h3 className="mb-3 text-[1.2rem] font-bold text-[#F5F3EE]">
                    {item.title}
                  </h3>
                  <p className="text-[0.95rem] leading-[1.7] text-[#B8B8B8]">
                    {item.heroDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
