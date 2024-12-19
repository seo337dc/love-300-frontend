"use client";

import { useMemo } from "react";
import { styled } from "styled-components";
import HeaderSection from "./HeaderSection";
import Nimonic from "@/components/template/Nimonic";
import Button from "@/components/ui/Button";
import { Colors } from "@/common/constant";
import useNimonicStore from "@/store/nimonicStore";
import { useRouter } from "next/navigation";

const NimonicView = () => {
  const router = useRouter();

  const { nimonic } = useNimonicStore();

  const handleMoveMain = () => router.push("/main");

  const memoDisable: boolean = useMemo(() => {
    const isNone = nimonic.find((nimonicData) => nimonicData === "");
    return isNone === "";
  }, [nimonic]);

  return (
    <Wrapper>
      <HeaderSection />
      <Nimonic />
      <Button disabled={memoDisable} onClick={handleMoveMain}>
        확인
      </Button>
    </Wrapper>
  );
};

export default NimonicView;

const Wrapper = styled.div`
  height: 100vh;
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  background-color: ${Colors.White};
`;
