import { useRouter } from "next/navigation";
import StackingCard from "@/components/ui/StackingCard";

const StackingSection = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      <StackingCard onClick={() => router.push("/staking/1")} type="신청하기" />
      <StackingCard onClick={() => router.push("/staking/1")} type="신청하기" />
      <StackingCard onClick={() => router.push("/staking/1")} type="신청하기" />
    </div>
  );
};

export default StackingSection;
