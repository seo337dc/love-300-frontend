import LockupCard from "@/components/ui/LockupCard";

const LockupSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <LockupCard type="신청하기" />
      <LockupCard type="신청하기" />
      <LockupCard type="신청하기" />
    </div>
  );
};

export default LockupSection;
