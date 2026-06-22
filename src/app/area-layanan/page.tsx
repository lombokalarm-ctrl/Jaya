import Link from "next/link";
import type { Metadata } from "next";
import { serviceAreaList } from "@/lib/service-areas";

export const metadata: Metadata = {
  title: "Area Layanan Lombok Barat | Kholid Jaya",
  description:
    "Lihat area layanan Kholid Jaya untuk kebutuhan material bangunan di Lombok Barat, termasuk Labuapi, Gerung, Kediri, Kuripan, dan Lembar.",
  alternates: {
    canonical: "/area-layanan",
  },
  openGraph: {
    type: "website",
    url: "https://lombokbangunan.com/area-layanan",
    title: "Area Layanan Lombok Barat | Kholid Jaya",
    description:
      "Kholid Jaya melayani kebutuhan material bangunan untuk berbagai area di Lombok Barat.",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Area layanan Kholid Jaya di Lombok Barat",
      },
    ],
  },
};

export default function ServiceAreasOverviewPage() {
  return (
    <main className="bg-[#F7F3EC] text-[#111111]">
      <section className="bg-[#E8E4DB] px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#2D6A4F]">
            Area Layanan
          </p>
          <h1 className="max-w-4xl text-[clamp(2.2rem,5vw,4.6rem)] font-bold leading-[1.02] tracking-[-0.03em]">
            Layanan Material Bangunan untuk Area Lombok Barat
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#333333]">
            Kholid Jaya melayani kebutuhan semen, besi, baja ringan, atap
            spandek, cat, material listrik, dan alat pertukangan untuk rumah,
            toko, renovasi, dan proyek di berbagai area Lombok Barat.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceAreaList.map((area) => (
              <Link
                key={area.slug}
                href={`/area-layanan/${area.slug}`}
                className="rounded-[28px] bg-white p-7 shadow-[0_16px_50px_rgba(0,0,0,0.06)] transition hover:-translate-y-1"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#C75146]">
                  Lombok Barat
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-[-0.02em]">
                  {area.name}
                </h2>
                <p className="mt-4 leading-7 text-[#333333]">
                  {area.heroDescription}
                </p>
                <span className="mt-6 inline-flex text-sm font-semibold text-[#2D6A4F]">
                  Lihat layanan area →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
