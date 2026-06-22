"use client";

import Link from "next/link";
import { serviceAreaList } from "@/lib/service-areas";

export default function ServiceAreasTeaser() {
  return (
    <section className="bg-white px-[clamp(1.25rem,5vw,4rem)] py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] rounded-[32px] bg-[#F5F3EE] p-8 shadow-[0_16px_50px_rgba(0,0,0,0.05)] sm:p-12">
        <div className="max-w-3xl">
          <span className="mb-4 block text-[0.875rem] font-semibold uppercase tracking-[0.12em] text-[#2D6A4F]">
            AREA LAYANAN
          </span>
          <h2
            className="text-[#111111] font-bold"
            style={{
              fontFamily: "var(--font-display), var(--font-sans)",
              fontSize: "clamp(1.9rem, 4vw, 3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Melayani kebutuhan bangunan di berbagai area Lombok Barat
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-[1.8] text-[#333333]">
            Kholid Jaya membantu pelanggan rumah tangga, tukang, dan proyek di
            Labuapi, Gerung, Kediri, Kuripan, Lembar, dan area Lombok Barat
            lainnya dengan material bangunan yang lengkap.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {serviceAreaList.map((area) => (
            <Link
              key={area.slug}
              href={`/area-layanan/${area.slug}`}
              className="rounded-full border border-[#111111]/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#111111] transition hover:border-[#111111]/25"
            >
              {area.name}
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/area-layanan"
            className="inline-flex items-center justify-center rounded-full bg-[#2D6A4F] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#245C3F]"
          >
            Lihat Semua Area Layanan
          </Link>
        </div>
      </div>
    </section>
  );
}
