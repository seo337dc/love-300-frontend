import { Colors } from "@/common/constant";
import Button from "@/components/ui/Button";
import { styled } from "styled-components";

type TProps = {
  onNext: () => void;
  onCancel: () => void;
  amount: string;
};
const Step4 = ({ onNext, onCancel, amount }: TProps) => {
  return (
    <section className="h-[70vh] px-4">
      <div className="h-[55vh] flex flex-col justify-center items-center">
        <div>
          <AmountText>{amount}</AmountText>
        </div>
        <p className="font-semibold text-xl">코인을 송금할까요?</p>
      </div>
      <div className="flex flex-col gap-4">
        <Button onClick={onCancel} bgColor={Colors.NeutralC}>
          취소하기
        </Button>
        <Button onClick={onNext}>송금하기</Button>
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
