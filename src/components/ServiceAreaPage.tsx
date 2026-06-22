import Link from "next/link";
import type { ServiceAreaData } from "@/lib/service-areas";
import { serviceAreas } from "@/lib/service-areas";

const whatsappHref = "https://wa.me/6287865557001";

export default function ServiceAreaPage({
  area,
}: {
  area: ServiceAreaData;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
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
        name: "Area Layanan",
        item: "https://lombokbangunan.com/area-layanan",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.name,
        item: `https://lombokbangunan.com/area-layanan/${area.slug}`,
      },
    ],
  };

  return (
    <main className="bg-[#F7F3EC] text-[#111111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-[#E8E4DB] px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#2D6A4F]">
            Area Layanan Lombok Barat
          </p>
          <h1 className="max-w-4xl text-[clamp(2.2rem,5vw,4.6rem)] font-bold leading-[1.02] tracking-[-0.03em]">
            {area.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#333333]">
            {area.heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#2D6A4F] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#245C3F]"
            >
              Tanya Stok via WhatsApp
            </a>
            <Link
              href="/area-layanan"
              className="inline-flex items-center justify-center rounded-full border border-[#111111]/12 bg-white px-7 py-3 text-sm font-semibold text-[#111111] transition hover:border-[#111111]/25"
            >
              Lihat Semua Area
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-[-0.02em]">
              {area.introTitle}
            </h2>
            <p className="mt-5 text-[1.05rem] leading-8 text-[#333333]">
              {area.introBody}
            </p>
          </div>

          <div className="rounded-[28px] bg-white p-7 shadow-[0_16px_50px_rgba(0,0,0,0.06)]">
            <h2 className="text-xl font-bold">Kebutuhan yang sering dicari</h2>
            <ul className="mt-5 space-y-3 text-[#333333]">
              {area.localNeeds.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#C9A227]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-[-0.02em]">
            Kenapa pelanggan area {area.name} memilih Kholid Jaya
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {area.serviceHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[#111111]/8 bg-[#F7F3EC] p-6"
              >
                <p className="text-[1rem] leading-7 text-[#333333]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-[-0.02em]">
            Pertanyaan yang sering ditanyakan
          </h2>
          <div className="mt-8 space-y-4">
            {area.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[24px] bg-white p-6 shadow-[0_14px_36px_rgba(0,0,0,0.05)]"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-[#333333]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-[-0.02em]">
            Area terdekat lainnya
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {area.relatedAreas.map((slug) => (
              <Link
                key={slug}
                href={`/area-layanan/${slug}`}
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/92 transition hover:border-white/35 hover:text-white"
              >
                {serviceAreas[slug].name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
