import StackingCard from "@/components/ui/StackingCard";

const StackingSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <StackingCard type="신청하기" />
      <StackingCard type="신청하기" />
      <StackingCard type="신청하기" />
    </div>
  );
};

export default StackingSection;
