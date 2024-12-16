import { useState } from "react";

import Button from "@/components/ui/Button";
import { NumberInput } from "@/components/ui/Input";

type TProps = {
  onNext: () => void;
};

const Step2 = ({ onNext }: TProps) => {
  const [amount, setAmount] = useState<string>("");
  const handleInput = (value: string) => setAmount(value);
  return (
    <section className="h-[70vh] flex flex-col justify-between">
      <div>
        <p className="font-semibold text-xl mb-2">결제 금액을 입력해주세요.</p>
        <NumberInput value={amount} handleInput={handleInput} />
      </div>
      <Button onClick={onNext}>결제</Button>
    </section>
  );
};

export default Step2;
