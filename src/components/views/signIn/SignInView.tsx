"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import ContentSection from "./ContentSection";
import InputSection from "./InputSection";
import { REG_ENG, REG_PWD_NUM } from "@/common/util";

export type TSignIn = {
  id: string;
  password: string;
};
const INIT_DATA: TSignIn = {
  id: "",
  password: "",
};
const SignInView = () => {
  const router = useRouter();

  const [info, setInfo] = useState<TSignIn>(INIT_DATA);
  const [idError, setIdError] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const handleId = (idValue: string) => setInfo({ ...info, id: idValue });
  const handlePwd = (pwdValue: string) => {
    setInfo({ ...info, password: pwdValue });
  };

  const handleMoveNimonic = () => {
    if (!info.id) {
      setIdError(true);
      return;
    }

    const { password } = info;
    const hasMinLength = password.length >= 8; // 8자리 이상
    const hasAlphabet = REG_ENG.test(password); // 영어 포함
    const hasNumber = REG_PWD_NUM.test(password); // 숫자 포함
    if (hasMinLength && hasAlphabet && hasNumber) {
    } else {
      alert("비밀번호는 8자리이상 영어 및 숫자가 포함되어야합니다.");
      setPwdError(true);
      return;
    }

    router.push("/nimonic");
  };

  const disableMemo: boolean = useMemo(() => {
    if (!info.id || !info.password) return true;
    return false;
  }, [info]);

  return (
    <main className="h-full flex flex-col justify-between py-[100px] px-4">
      <ContentSection />
      <InputSection
        idError={idError}
        pwdError={pwdError}
        info={info}
        handleId={handleId}
        handlePwd={handlePwd}
      />
      <Button onClick={handleMoveNimonic} disabled={disableMemo}>
        로그인
      </Button>
    </main>
  );
};

export default SignInView;
