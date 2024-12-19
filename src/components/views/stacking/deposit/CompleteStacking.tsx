import { BadgeButton } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

type TProps = {
  amount: string;
};
const CompleteStacking = ({ amount }: TProps) => {
  return (
    <section className="h-[70vh] flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col justify-center items-center">
        <Icon
          fileName="staking.png"
          alt="staking icon"
          width="100px"
          height="100px"
        />
        <p className="font-semibold text-xl">{amount}코인 스테이킹</p>
        <p className="font-semibold text-xl">출금이 완료되었습니다!</p>
      </div>
      <BadgeButton href="/main">홈으로</BadgeButton>
    </section>
  );
};

export default CompleteStacking;
