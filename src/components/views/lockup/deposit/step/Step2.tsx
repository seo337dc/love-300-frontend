import { Colors } from "@/common/constant";
import Button from "@/components/ui/Button";
import { NumberInput } from "@/components/ui/Input";
import { styled } from "styled-components";

type TProps = {
  id: string;
  amount: string;
  handleInput: (value: string) => void;
  onNext: () => void;
};

const Step2 = ({ id, amount, handleInput, onNext }: TProps) => {
  return (
    <Wrap>
      <p className="mb-2 font-medium text-lg">락업 {id} 출금 수량</p>
      <NumberInput value={amount} handleInput={handleInput} />
      <AmounText>전체 수량 입력 : 120,000,000</AmounText>

      <div className="fixed w-full bottom-[120px] left-0 z-10 px-4">
        <Button onClick={onNext}>출금하기</Button>
      </div>
    </Wrap>
  );
};

export default Step2;

const Wrap = styled.section`
  min-height: 300px;
  background-color: ${Colors.White};
  padding: 1em;
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
