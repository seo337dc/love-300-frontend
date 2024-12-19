"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";
import HeaderSection from "./HeaderSection";
import Nimonic from "@/components/template/Nimonic";
import Button from "@/components/ui/Button";
import useNimonicStore from "@/store/nimonicStore";
import { Colors } from "@/common/constant";

const NimonicView = () => {
  const router = useRouter();
  const { nimonic, clear } = useNimonicStore();

  const [isError, setIsError] = useState(false);

  const handleMoveMain = () => router.push("/main");

  const memoDisable: boolean = useMemo(() => {
    const isNone = nimonic.find((nimonicData) => nimonicData === "");
    return isNone === "";
  }, [nimonic]);

  useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  return (
    <Wrapper>
      <HeaderSection />
      <Nimonic />

      {isError && <ErrorText>단어 또는 순서가 틀립니다</ErrorText>}

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

const ErrorText = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: ${Colors.Error};
`;
