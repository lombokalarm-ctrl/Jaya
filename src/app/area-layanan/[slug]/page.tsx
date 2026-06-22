import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceAreaPage from "@/components/ServiceAreaPage";
import {
  getServiceAreaBySlug,
  getServiceAreaMetadata,
  serviceAreaList,
} from "@/lib/service-areas";

type ServiceAreaPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return serviceAreaList.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: ServiceAreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) {
    return {};
  }

  return getServiceAreaMetadata(area);
}

export default async function ServiceAreaDetailPage({
  params,
}: ServiceAreaPageProps) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) {
    notFound();
  }

  return <ServiceAreaPage area={area} />;
}
