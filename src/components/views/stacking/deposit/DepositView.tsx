"use client";

import { useState } from "react";
import Header from "@/components/ui/Header";
import InfoSection from "./InfoSection";
import InputSection from "./InputSection";
import Button from "@/components/ui/Button";
import SecondPwd from "@/components/template/SecondPwdTemplate";
import ConfirmStacking from "./ConfirmStacking";
import CompleteStacking from "./CompleteStacking";
import { useRouter } from "next/navigation";

type TProps = {
  id: string;
};
const DepositView = ({ id }: TProps) => {
  const router = useRouter();
  const [amount, setAmount] = useState<string>("");
  const [isSecondPwd, setIsSecondPwd] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleInput = (value: string) => setAmount(value);

  if (isSecondPwd)
    return (
      <SecondPwd
        actionAfter={() => {
          setIsSecondPwd(false);
          setIsConfirm(true);
        }}
      />
    );

  if (isConfirm)
    return (
      <ConfirmStacking
        onConfirm={() => {
          setIsComplete(true);
          setIsConfirm(false);
        }}
        onCancel={() => setIsConfirm(false)}
      />
    );

  if (isComplete) return <CompleteStacking />;

  return (
    <div>
      <Header
        title={`스테이킹 ${id} 출금`}
        onBack={() => router.push("/staking")}
      />
      <InfoSection />
      <InputSection id={id} amount={amount} handleInput={handleInput} />
      <Button onClick={() => setIsSecondPwd(true)}>출금하기</Button>
    </div>
  );
};

export default DepositView;
