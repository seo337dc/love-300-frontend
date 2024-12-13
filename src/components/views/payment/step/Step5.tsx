import { Colors } from "@/common/constant";
import Icon from "@/components/ui/Icon";
import { styled } from "styled-components";

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
      <Button>홈으로</Button>
    </section>
  );
};

export default Step5;

const Button = styled.button`
  width: 83px;
  height: 35px;
  padding: 3px 15px;
  border-radius: 25px;

  font-weight: 400;
  font-size: 16px;
  color: ${Colors.Neutral5};
  background: ${Colors.White};
  box-shadow: 0px 1px 8px 0px #00000026;
`;
