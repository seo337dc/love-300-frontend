import { useState } from "react";
import SecondPwd from "@/components/common/SecondPwd";
import Button from "@/components/ui/Button";

type TProps = {
  onNext: () => void;
};

const Step3 = ({ onNext }: TProps) => {
  const [pwd, setPwd] = useState(["", "", "", ""]);
  return (
    <section className="h-[70vh]">
      <div className="h-[50vh] flex flex-col justify-center items-center">
        <p className="font-medium text-lg mb-5">2차 비밀번호 입력</p>
        <SecondPwd secondPwd={pwd} handlePwd={() => {}} />
      </div>
      <Button onClick={onNext}>다음</Button>
    </section>
  );
};

export default Step3;
