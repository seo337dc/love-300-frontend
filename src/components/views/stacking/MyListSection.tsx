import { useRouter } from "next/navigation";
import StackingCard from "@/components/ui/StackingCard";

const MyListSection = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <StackingCard
        onClick={() => router.push("/staking/deposit/1")}
        isDark
        type="출금하기"
      />
      <StackingCard
        onClick={() => router.push("/staking/deposit/2")}
        isDark
        type="출금하기"
      />
      <StackingCard
        onClick={() => router.push("/staking/deposit/3")}
        isDark
        type="출금하기"
      />
    </div>
  );
};

export default MyListSection;
