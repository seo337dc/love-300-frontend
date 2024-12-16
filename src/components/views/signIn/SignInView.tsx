"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import ContentSection from "./ContentSection";
import InputSection from "./InputSection";

const SignInView = () => {
  const router = useRouter();

  return (
    <main className="h-full flex flex-col justify-between py-[100px] px-4">
      <ContentSection />
      <InputSection />
      <Button onClick={() => router.push("/main")}>로그인</Button>
    </main>
  );
};

export default SignInView;
