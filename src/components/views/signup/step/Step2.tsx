import { REG_BAN_KR, REG_PWD } from "@/common/util";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import useSignupStore from "@/store/signupStore";
import { useMemo, useState } from "react";

type TProps = {
  handleNext: () => void;
};
const Step2 = ({ handleNext }: TProps) => {
  const { signup, setSignupField } = useSignupStore();

  const [idError, setIdError] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const handleId = (value: string) => {
    setSignupField("id", value);
    setIdError(REG_BAN_KR.test(value)); // 한 줄로 축약
  };
  const handlePwd = (value: string) => {
    setSignupField("password", value);
    console.log(value, REG_PWD.test(value));
    setPwdError(!REG_PWD.test(value)); // 한 줄로 축약
  };
  const handlePwdCheck = (value: string) => {
    setSignupField("checkPassword", value);
  };

  const disable: boolean = useMemo(() => {
    if (!signup.id || !signup.password || !signup.checkPassword) {
      return true;
    }

    if (signup.checkPassword !== signup.password) {
      return true;
    }
    return false;
  }, [signup]);

  return (
    <section>
      <Input
        value={signup.id}
        title="아이디 생성"
        placeholder="example123"
        bgColor="white"
        onChange={handleId}
        isError={idError}
        errorMsg="영문으로 입력해주세요"
      />
      <Input
        value={signup.password}
        title="비밀번호 생성"
        placeholder="example123!"
        bgColor="white"
        description="영문, 숫자, 특수문자를 포함해주세요"
        type="password"
        onChange={handlePwd}
        isError={pwdError}
        errorMsg="8자 이상에 영문, 숫자, 특수문자를 포함해주세요"
      />
      <Input
        value={signup.checkPassword}
        title="비밀번호 확인"
        placeholder="example123!"
        bgColor="white"
        description="동일한 비밀번호를 입력해주세요"
        type="password"
        onChange={handlePwdCheck}
        isError={
          !!signup.checkPassword && signup.checkPassword !== signup.password
        }
        errorMsg="입력하신 비밀번호가 일치하지 않습니다"
      />

      <Button disabled={disable} onClick={handleNext}>
        다음
      </Button>
    </section>
  );
};

export default Step2;
