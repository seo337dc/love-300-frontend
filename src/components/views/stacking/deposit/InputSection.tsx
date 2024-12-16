import { Colors } from "@/common/constant";
import { NumberInput } from "@/components/ui/Input";
import { styled } from "styled-components";

type TProps = {
  id: string;
  amount: string;
  handleInput: (value: string) => void;
};

const InputSection = ({ id, amount, handleInput }: TProps) => {
  return (
    <section className="p-4 min-h-[300px]">
      <p className="mb-2 font-medium text-lg">스테이킹 {id} 출금 수량</p>
      <NumberInput value={amount} handleInput={handleInput} />
      <AmounText>전체 수량 입력 : 120,000,000</AmounText>
    </section>
  );
};

export default InputSection;

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
