import StackingCard from "@/components/ui/StackingCard";

const ExpirationSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <StackingCard isDark type="출금하기" />
      <StackingCard isDark type="출금하기" />
      <StackingCard isDark type="출금하기" />
    </div>
  );
};

export default ExpirationSection;
