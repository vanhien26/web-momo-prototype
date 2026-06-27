import { notFound } from 'next/navigation';
import { getDemoSrc, findPrototypeById, getAllPrototypeIds } from '@/data/prototypes';
import DemoFrame from '@/components/DemoFrame';
import type { Metadata } from 'next';

// Tạo static params cho tất cả prototype IDs (bao gồm cả cha lẫn con)
export function generateStaticParams() {
  return getAllPrototypeIds().map((id) => ({ slug: id }));
}

// Dynamic metadata cho SEO
export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const proto = findPrototypeById(slug);
    if (!proto) return { title: 'Not Found' };
    return {
      title: `${proto.name} — MoMo Prototype Store`,
      description: proto.description,
    };
  });
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proto = findPrototypeById(slug);

  if (!proto) {
    notFound();
  }

  const src = getDemoSrc(proto);

  return <DemoFrame src={src} title={proto.name} />;
}
