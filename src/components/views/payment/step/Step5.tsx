import { BadgeButton } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const Step5 = () => {
  return (
    <section className="h-[70vh] flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col justify-center items-center">
        <Icon
          fileName="check.png"
          alt="check icon"
          width="100px"
          height="100px"
        />
        <p className="font-semibold text-xl">100,000코인이</p>
        <p className="font-semibold text-xl">결제되었습니다.</p>
      </div>
      <BadgeButton href="/main">홈으로</BadgeButton>
    </section>
  );
};

export default Step5;
