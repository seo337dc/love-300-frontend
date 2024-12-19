import { useState } from "react";

import Button from "@/components/ui/Button";
import { NumberInput } from "@/components/ui/Input";

type TProps = {
  onNext: () => void;
  amount: string;
  handleAmount: (value: string) => void;
};

const Step2 = ({ onNext, amount, handleAmount }: TProps) => {
  console.log("?amount", amount);
  return (
    <section className="h-[70vh] flex flex-col justify-between">
      <div>
        <p className="font-semibold text-xl mb-2">결제 금액을 입력해주세요.</p>
        <NumberInput
          value={amount}
          handleInput={(value) => handleAmount(value)}
        />
      </div>
      <Button onClick={onNext} disabled={!amount}>
        결제
      </Button>
    </section>
  );
};

export default Step2;
