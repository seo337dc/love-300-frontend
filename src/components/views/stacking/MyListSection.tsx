import StackingCard from "@/components/ui/StackingCard";

const MyListSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <StackingCard isDark type="출금하기" />
      <StackingCard isDark type="출금하기" />
      <StackingCard isDark type="출금하기" />
    </div>
  );
};

export default MyListSection;
