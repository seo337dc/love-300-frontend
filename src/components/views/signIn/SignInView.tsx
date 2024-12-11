"use client";

import Button from "@/components/ui/Button";
import ContentSection from "./ContentSection";
import InputSection from "./InputSection";

const SignInView = () => {
  return (
    <main className="h-full flex flex-col justify-between py-[100px]">
      <ContentSection />
      <InputSection />
      <Button>로그인</Button>
    </main>
  );
};

export default SignInView;
