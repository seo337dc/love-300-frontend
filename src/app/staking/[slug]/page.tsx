import DetailView from "@/components/views/stacking/detail/DetailView";

export default function Page({ params }: { params: { slug: string } }) {
  return <DetailView id={params.slug} />;
}
