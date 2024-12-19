"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/ui/Header";
import Step1 from "./step/Step1";
import Step2 from "./step/Step2";
import Step3 from "./step/Step3";
import Step4 from "./step/Step4";
import Step5 from "./step/Step5";
import { TPayment } from "@/types/payment";

const INIT: TPayment = {
  amount: "",
};

const PaymentView = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [paymentInfo, setPaymentInfo] = useState<TPayment>(INIT);

  const handleAmount = (value: string) => {
    setPaymentInfo({ ...paymentInfo, amount: value });
  };

  return (
    <div className="px-4">
      <Header title="QR코드 결제" onBack={() => router.push("/main")} />
      {step === 1 && <Step1 onNext={() => setStep(2)} />}
      {step === 2 && (
        <Step2
          onNext={() => setStep(3)}
          amount={paymentInfo.amount}
          handleAmount={handleAmount}
        />
      )}
      {step === 3 && <Step3 onNext={() => setStep(4)} />}
      {step === 4 && (
        <Step4
          onNext={() => setStep(5)}
          onBack={() => setStep(3)}
          amount={paymentInfo.amount}
        />
      )}
      {step === 5 && <Step5 amount={paymentInfo.amount} />}
    </div>
  );
};

export default PaymentView;
