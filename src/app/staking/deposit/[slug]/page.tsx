import DepositView from "@/components/views/stacking/deposit/DepositView";

export default function StakingDepositPage({
  params,
}: {
  params: { slug: string };
}) {
  return <DepositView id={params.slug} />;
}
