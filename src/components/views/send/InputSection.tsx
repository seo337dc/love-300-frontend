import { AddressInput } from "@/components/ui/Input";

type TProps = {
  value: string;
  handleInput: (value: string) => void;
};
const InputSection = ({ value, handleInput }: TProps) => {
  return (
    <div className="px-4">
      <p className="font-semibold text-xl mb-2">누구에게 송금할까요?</p>
      <AddressInput value={value} handleInput={handleInput} />
    </div>
  );
};

export default InputSection;
