import SecondPwd from "@/components/common/SecondPwd";
import Button from "@/components/ui/Button";
import useSignupStore from "@/store/signupStore";
import { useMemo } from "react";

type TProps = {
  handleNext: () => void;
};
const Step3 = ({ handleNext }: TProps) => {
  const { signup, setSignupField } = useSignupStore();

  const handlePwd = (value: string[]) => setSignupField("secondPwd", value);

  const disable: boolean = useMemo(() => {
    const test = signup.secondPwd.filter((str) => str === "");
    if (test.length > 0) return true;
    return false;
  }, [signup.secondPwd]);

  return (
    <section className="min-h-[60vh] flex flex-col justify-between">
      <div className="min-h-[200px] flex flex-col justify-center items-center">
        <p className="font-medium text-lg mb-5">2차 비밀번호 입력</p>
        <SecondPwd secondPwd={signup.secondPwd} handlePwd={handlePwd} />
      </div>

      <Button disabled={disable} onClick={handleNext}>
        다음
      </Button>
    </section>
  );
};

export default Step3;
