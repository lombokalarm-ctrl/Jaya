import { notFound } from "next/navigation";

import CategoryPage from "@/components/CategoryPage";
import {
  categoryPageList,
  getCategoryBySlug,
  getCategoryMetadata,
} from "@/lib/category-pages";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return categoryPageList.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const data = getCategoryBySlug(slug);

  if (!data) {
    return {};
  }

  return getCategoryMetadata(data);
}

export default async function CategoryRoute({ params }: CategoryPageProps) {
  const { slug } = await params;
  const data = getCategoryBySlug(slug);

  if (!data) {
    notFound();
  }

  return <CategoryPage data={data} />;
}
