import SendView from "@/components/views/lockup/send/SendView";

export default function LockupSendPage({
  params,
}: {
  params: { slug: string };
}) {
  return <SendView id={params.slug} />;
}
