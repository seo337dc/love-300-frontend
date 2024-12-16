"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Header from "@/components/ui/Header";
import InfoSection from "./InfoSection";
import Step1 from "./step/Step1";
import Step2 from "./step/Step2";
import Step3 from "./step/Step3";
import Step4 from "./step/Step4";
import Step5 from "./step/Step5";

type TProps = {
  id: string;
};
const DepositView = ({ id }: TProps) => {
  const router = useRouter();

  const [step, setStep] = useState(2);
  const [amount, setAmount] = useState<string>("");

  const handleInput = (value: string) => setAmount(value);

  return (
    <div>
      <Header
        title={step === 1 ? `락업 ${id}` : `락업 ${id} 출금`}
        onBack={() => router.push("/lockup")}
      />

      {step === 1 || (step === 2 && <InfoSection />)}

      {step === 1 && <Step1 onNext={() => setStep(2)} />}
      {step === 2 && (
        <Step2
          id={id}
          amount={amount}
          handleInput={handleInput}
          onNext={() => setStep(3)}
        />
      )}

      {step === 3 && <Step3 onNext={() => setStep(4)} />}

      {step === 4 && (
        <Step4 onNext={() => setStep(5)} onCancel={() => setStep(3)} />
      )}

      {step === 5 && <Step5 />}
    </div>
  );
};

export default DepositView;
