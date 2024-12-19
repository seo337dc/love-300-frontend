"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

import Header from "@/components/ui/Header";
import TitleSection from "./TitleSection";
import Step1 from "./step/Step1";
import Step2 from "./step/Step2";
import Step3 from "./step/Step3";
import Step4 from "./step/Step4";
import CompleteView from "./CompleteView";
import useSignupStore from "@/store/signupStore";
import useNimonicStore from "@/store/nimonicStore";

const SignupView = () => {
  const router = useRouter();
  const { clear } = useSignupStore();
  const { clear: clearNimonic } = useNimonicStore();

  const [step, setStep] = useState(3);

  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    if (step === 1) setStep(2);
    if (step === 2) setStep(3);
    if (step === 3) setStep(4);
    if (step === 4) {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (step === 1 || isComplete) {
      router.push("/");
      return;
    } else {
      setStep(step - 1);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [step]);

  useEffect(() => {
    return () => {
      clear();
      clearNimonic();
    };
  }, []);

  return (
    <div>
      <Header title="회원가입" onBack={handleBack} />
      <Line divide={step} />
      {!isComplete && (
        <div className="px-4 pt-4">
          <TitleSection step={step} />
          {step === 1 && <Step1 handleNext={handleNext} />}
          {step === 2 && <Step2 handleNext={handleNext} />}
          {step === 3 && <Step3 handleNext={handleNext} />}
          {step === 4 && <Step4 handleNext={handleNext} />}
        </div>
      )}
      {isComplete && <CompleteView />}
    </div>
  );
};

export default SignupView;

const Line = styled.div<{ divide: number }>`
  width: ${({ divide }) => `calc(100% / 5 * ${divide})`};
  border: 0.5px solid transparent; /* 투명한 테두리 설정 */
  background-image: linear-gradient(
    to right,
    #064567,
    #e71139
  ); /* 그라디언트 배경 */
  background-origin: border-box; /* 배경이 테두리 박스에서 시작되도록 설정 */
  padding: 1px; /* 내부 여백을 추가하여 배경이 보이도록 */
`;
