import { Colors } from "@/common/constant";
import Button from "@/components/ui/Button";
import { styled } from "styled-components";
import InputSection from "../InputSection";

type TProps = {
  address: string;
  handleInput: (value: string) => void;
  onNext: () => void;
};
const Step1 = ({ address, handleInput, onNext }: TProps) => {
  return (
    <Wrap>
      <InputSection value={address} handleInput={handleInput} />

      <div className="absolute w-full bottom-[120px] left-0 z-20 px-4">
        <Button onClick={onNext}>다음</Button>
      </div>
    </Wrap>
  );
};

export default Step1;

const Wrap = styled.section`
  width: 100%;
  min-height: 80vh;
  background-color: ${Colors.White};
`;
