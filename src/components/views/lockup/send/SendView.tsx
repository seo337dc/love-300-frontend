"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { styled } from "styled-components";
import Header from "@/components/ui/Header";

import Step1 from "./step/Step1";
import Step2 from "./step/Step2";
import Step3 from "./step/Step3";
import Step4 from "./step/Step4";
import Step5 from "./step/Step5";

type TProps = {
  id: string;
};
const SendView = ({ id }: TProps) => {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const handleAddressInput = (value: string) => setAddress(value);
  const handleAmount = (value: string) => setAmount(value);
  return (
    <div>
      <Header title={`락업 ${id} 송금`} onBack={() => router.push("/main")} />
      <Wrap>
        {step === 1 && (
          <Step1
            address={address}
            handleInput={handleAddressInput}
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <Step2
            amount={amount}
            handleInput={handleAmount}
            onNext={() => setStep(3)}
          />
        )}

        {step === 3 && <Step3 onNext={() => setStep(4)} />}

        {step === 4 && (
          <Step4
            onCancel={() => setStep(3)}
            onNext={() => setStep(5)}
            amount={amount}
          />
        )}

        {step === 5 && <Step5 amount={amount} />}
      </Wrap>
    </div>
  );
};

export default SendView;

const Wrap = styled.div`
  position: relative;
  min-height: calc(100vh - 180px);
  padding: 0 4px;
`;
