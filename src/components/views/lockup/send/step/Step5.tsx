import { BadgeButton } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

type TProps = {
  amount: string;
};
const Step5 = ({ amount }: TProps) => {
  return (
    <section className="h-[70vh] flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col justify-center items-center">
        <div className="h-[150px] w-[120px] relative">
          <Icon
            className="absolute z-[11] top-0 left-0"
            fileName="menu-lockup.png"
            alt="menu-lockup icon"
            width="100px"
            height="100px"
          />
          <Icon
            className="absolute z-[10] top-12 left-10"
            fileName="dollar.png"
            alt="dollar icon"
            width="100px"
            height="100px"
          />
        </div>

        <p className="font-semibold text-xl mt-2">{amount} 락업 코인이</p>
        <p className="font-semibold text-xl">송금되었습니다.</p>
      </div>
      <BadgeButton href="/main">홈으로</BadgeButton>
    </section>
  );
};

export default Step5;
