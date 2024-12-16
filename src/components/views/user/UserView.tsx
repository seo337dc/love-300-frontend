"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/ui/Header";
import Wallet from "@/components/template/Wallet";
import { LinkButton } from "@/components/ui/Button";
import { styled } from "styled-components";
import { Colors } from "@/common/constant";

const UserView = () => {
  const id = "d859390524f10a499a7200581cda636e277c3b9e6";

  const router = useRouter();

  return (
    <div className="px-4">
      <Header onBack={() => router.push("/main")} title="내 정보" />
      <Wallet data={id} size={150} />

      <section>
        <Line />
        <LinkButton href="" text="계정 정보" />
        <Line />
        <LinkButton href="" text="2차 비밀번호 변경" />
        <Line />
        <LinkButton href="/" text="로그아웃" />
      </section>
    </div>
  );
};

export default UserView;

const Line = styled.div`
  width: 100%;
  border: 1px solid ${Colors.NeutralE};
`;
