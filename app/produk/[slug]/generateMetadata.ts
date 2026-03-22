import { products } from "@/lib/products";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {

  const product = products.find(p => p.slug === params.slug);

  return {
    title: product?.title + " | Nusantara Mitra Persada",
    description: product?.desc,
    openGraph: {
      title: product?.title,
      description: product?.desc,
      images: [product?.image]
    }
  };

}