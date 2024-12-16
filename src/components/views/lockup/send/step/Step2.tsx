import { styled } from "styled-components";
import { Colors } from "@/common/constant";
import Button from "@/components/ui/Button";
import { NumberInput } from "@/components/ui/Input";

type TProps = {
  amount: string;
  handleInput: (value: string) => void;
  onNext: () => void;
};
const Step2 = ({ amount, handleInput, onNext }: TProps) => {
  return (
    <Wrap>
      <FromText>받는 주소: d859390524f10a499a7200581cda63699a...</FromText>
      <p className="font-semibold text-xl mb-4">보낼 수량을 입력해주세요.</p>
      <NumberInput value={amount} handleInput={handleInput} />
      <AmounText>전체 수량 입력 : 120,000,000</AmounText>

      <div className="absolute w-full bottom-[120px] left-0 z-20 px-4">
        <Button onClick={onNext}>다음</Button>
      </div>
    </Wrap>
  );
};

export default Step2;

const Wrap = styled.section`
  width: 100%;
  min-height: 80vh;
  padding: 1em;
  background-color: ${Colors.White};
`;

const FromText = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

const AmounText = styled.div`
  margin-top: 15px;
  min-width: 150px;
  width: auto;
  height: 26px;
  border-radius: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Colors.NeutralF};
  color: ${Colors.Neutral5};
  font-weight: 300;
  font-size: 12px;
`;
