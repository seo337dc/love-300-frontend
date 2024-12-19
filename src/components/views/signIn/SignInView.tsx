"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import ContentSection from "./ContentSection";
import InputSection from "./InputSection";

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

  const handleId = (idValue: string) => setInfo({ ...info, id: idValue });
  const handlePwd = (pwdValue: string) => {
    setInfo({ ...info, password: pwdValue });
  };

  const disableMemo: boolean = useMemo(() => {
    if (!info.id || !info.password) return true;
    return false;
  }, [info]);

  return (
    <main className="h-full flex flex-col justify-between py-[100px] px-4">
      <ContentSection />
      <InputSection info={info} handleId={handleId} handlePwd={handlePwd} />
      <Button onClick={() => router.push("/main")} disabled={disableMemo}>
        로그인
      </Button>
    </main>
  );
};

export default SignInView;
