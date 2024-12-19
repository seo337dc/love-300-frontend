import { styled } from "styled-components";
import Button from "@/components/ui/Button";
import { Colors } from "@/common/constant";

type TProps = {
  onCancel: () => void;
  onConfirm: () => void;
  amount: string;
};
const ConfirmStacking = ({ onCancel, onConfirm, amount }: TProps) => {
  return (
    <div className="h-screen">
      <div className="h-[55vh] flex flex-col justify-center items-center">
        <div>
          <AmountText>{amount}</AmountText>
          <span className="font-semibold text-xl ml-1">코인</span>
        </div>
        <p className="font-semibold text-xl">스테이킹을 출금할까요?</p>
      </div>
      <div className="flex flex-col gap-4 px-4">
        <Button onClick={onCancel} bgColor={Colors.NeutralC}>
          취소하기
        </Button>
        <Button onClick={onConfirm}>출금하기</Button>
      </div>
    </div>
  );
};

export default ConfirmStacking;

const AmountText = styled.span`
  font-size: 30px;
  font-weight: 600;
  color: ${Colors.PrimaryGradient};
`;
