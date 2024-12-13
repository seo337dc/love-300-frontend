"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/ui/Header";
import Step1 from "./step/Step1";
import Step2 from "./step/Step2";
import Step3 from "./step/Step3";
import Step4 from "./step/Step4";
import Step5 from "./step/Step5";

const PaymentView = () => {
  const router = useRouter();
  const [step, setStep] = useState(5);

  return (
    <div>
      <Header title="QR코드 결제" onBack={() => router.push("/main")} />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      {step === 5 && <Step5 />}
    </div>
  );
};

export default PaymentView;
