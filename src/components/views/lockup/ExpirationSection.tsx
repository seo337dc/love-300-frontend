import LockupCard from "@/components/ui/LockupCard";

const ExpirationSection = () => {
  return (
    <div className="flex flex-col gap-4 px-3">
      <LockupCard isDark type="출금하기" />
      <LockupCard isDark type="출금하기" />
      <LockupCard isDark type="출금하기" />
    </div>
  );
};

export default ExpirationSection;
