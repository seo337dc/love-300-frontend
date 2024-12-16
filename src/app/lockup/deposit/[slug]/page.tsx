import DepositView from "@/components/views/lockup/deposit/DepositView";

export default function LockupDepositPage({
  params,
}: {
  params: { slug: string };
}) {
  return <DepositView id={params.slug} />;
}
