"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { styled } from "styled-components";

import Button from "@/components/ui/Button";
import Header from "@/components/ui/Header";
import TitleSection from "./TitleSection";
import Step1 from "./step/Step1";
import Step2 from "./step/Step2";
import Step3 from "./step/Step3";
import Step4 from "./step/Step4";
import CompleteView from "./CompleteView";

import { DEFAULT_SIGNUP, TSignup } from "./constants";

const SignupView = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const [signupInfo, setSignupInfo] = useState<TSignup>(DEFAULT_SIGNUP);

  return (
    <div>
      <Header title="회원가입" onBack={() => router.push("/")} />
      <Line divide={step} />
      {!isComplete && (
        <div className="px-4">
          <TitleSection />
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}

          <section className="py-3">
            <Button>다음</Button>
          </section>
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
