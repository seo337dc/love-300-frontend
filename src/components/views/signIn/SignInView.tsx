"use client";

import { styled } from "styled-components";
import ContentSection from "./ContentSection";
import InputSection from "./InputSection";

const SignInView = () => {
  return (
    <main className="h-full flex flex-col justify-between px-4 py-[100px]">
      <ContentSection />
      <InputSection />
      <Button>로그인</Button>
    </main>
  );
};

export default SignInView;

const Button = styled.button`
  width: 100%;
  height: 50px;
  gap: 10px;
  border-radius: 25px;
  color: #fff;
  background-color: #000;
`;
