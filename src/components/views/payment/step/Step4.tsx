import { Colors } from "@/common/constant";
import Button from "@/components/ui/Button";
import { styled } from "styled-components";

const Step4 = () => {
  return (
    <section className="h-[70vh]">
      <div className="h-[55vh] flex flex-col justify-center items-center">
        <div>
          <AmountText>100,000</AmountText>
          <span className="font-semibold text-xl ml-1">코인</span>
        </div>
        <p className="font-semibold text-xl">결제할까요?</p>
      </div>
      <div className="flex flex-col gap-4">
        <Button bgColor={Colors.NeutralC}>취소하기</Button>
        <Button>결제하기</Button>
      </div>
    </section>
  );
};

export default Step4;

const AmountText = styled.span`
  font-size: 30px;
  font-weight: 600;
  color: ${Colors.PrimaryGradient};
`;
