import { ExpireCard } from "@/components/ui/StackingCard";
import { useRouter } from "next/navigation";

const ExpirationSection = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <ExpireCard onClick={() => router.push("/staking/deposit/1")} />
      <ExpireCard onClick={() => router.push("/staking/deposit/1")} />
      <ExpireCard onClick={() => router.push("/staking/deposit/1")} />
    </div>
  );
};

export default ExpirationSection;
