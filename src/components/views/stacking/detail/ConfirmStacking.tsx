import { styled } from "styled-components";
import Button from "@/components/ui/Button";
import { Colors } from "@/common/constant";
import EclipseBackground from "@/components/template/EclipseTemplate";

type TProps = {
  onCancel: () => void;
  onConfirm: () => void;
};
const ConfirmStacking = ({ onCancel, onConfirm }: TProps) => {
  return (
    <EclipseBackground>
      <div className="h-screen">
        <div className="h-[55vh] flex flex-col justify-center items-center">
          <div>
            <AmountText>100,000</AmountText>
            <span className="font-semibold text-xl ml-1">코인</span>
          </div>
          <p className="font-semibold text-xl">신청할까요?</p>
        </div>
        <div className="flex flex-col gap-4">
          <Button onClick={onCancel} bgColor={Colors.NeutralC}>
            취소하기
          </Button>
          <Button onClick={onConfirm}>신청하기</Button>
        </div>
      </div>
    </EclipseBackground>
  );
};

export default ConfirmStacking;

const AmountText = styled.span`
  font-size: 30px;
  font-weight: 600;
  color: ${Colors.PrimaryGradient};
`;
