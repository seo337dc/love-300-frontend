import Button from "@/components/ui/Button";
import InputSection from "../InputSection";
import ListSection from "../ListSection";

type TProps = {
  address: string;
  handleInput: (value: string) => void;
  onNext: () => void;
};
const Step1 = ({ address, handleInput, onNext }: TProps) => {
  return (
    <div>
      <InputSection value={address} handleInput={handleInput} />

      {!address && <ListSection />}

      {address && (
        <div className="absolute w-full bottom-0 left-0 z-20 px-4">
          <Button onClick={onNext}>다음</Button>
        </div>
      )}
    </div>
  );
};

export default Step1;
