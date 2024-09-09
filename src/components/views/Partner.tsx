"use client";

import styled, { keyframes } from "styled-components";
import { useAtom } from "jotai";
import { Lang, langAtom } from "@/store/langStore";

type TLogos = {
  src: string;
  alt: string;
};
const paternsLogos: TLogos[] = [
  { src: "partner_desert.png", alt: "partner_desert" },
  { src: "partner_gate.png", alt: "partner_gate" },
  { src: "partner_flow.png", alt: "partner_flow" },
  { src: "partner_manna.png", alt: "partner_manna" },
  { src: "partner_filecoin.png", alt: "partner_filecoin" },
  { src: "partner_klaytn.png", alt: "partner_klaytn" },
  { src: "patner_busan.png", alt: "patner_busan" },
  { src: "partner_heesung.png", alt: "partner_heesung" },

  { src: "partner_avco.png", alt: "partner_avco" },
  { src: "partner_bon.png", alt: "partner_bon" },
  { src: "partner_busan.png", alt: "partner_busan" },
  { src: "partner_gsg.png", alt: "partner_gsg" },
  { src: "partner_mongolia.png", alt: "partner_mongolia" },
  { src: "partner_uni.png", alt: "partner_uni" },
  { src: "dabsco_logo.png", alt: "dabsco_logo" },
];

const PartnerSection = () => {
  const [lang] = useAtom(langAtom);
  const obj: Record<Lang, Record<"title" | "description", string>> = {
    [Lang.ENG]: {
      title: "Partners & Collaborations Section",
      description: `List logos of major partners and institutions collaborating with the
      Unique Asset platform.`,
    },
    [Lang.KOR]: {
      title: "파트너 및 협력사",
      description: `유니크 플랫폼과 협력하는 주요 파트너 기관입니다.`,
    },
  };
  return (
    <Wrap>
      <TextSection>
        <TextWrap>
          <TextTitle>
            <span className="">{obj[lang].title}</span>
            <div className="line" />
          </TextTitle>

          <TextSub>
            {lang === Lang.ENG && (
              <>
                List logos of{" "}
                <span className="blue">
                  major partners and institutions collaborating
                </span>{" "}
                with the Unique Asset platform.
              </>
            )}

            {lang === Lang.KOR && (
              <div className="flex flex-col">
                유니크 플랫폼과 협력하는{" "}
                <div>
                  <span className="blue">주요 파트너 기관</span>입니다.
                </div>
              </div>
            )}
          </TextSub>
        </TextWrap>
      </TextSection>

      <LogoContainer>
        <AnimatedContainer>
          {paternsLogos
            .concat(paternsLogos)
            .concat(paternsLogos)
            .concat(paternsLogos)
            .concat(paternsLogos)
            .map((logo, i) => (
              <LogoWrap key={`${logo.src}_${i}`}>
                <LogoImg src={logo.src} alt={logo.alt} />
              </LogoWrap>
            ))}
        </AnimatedContainer>
      </LogoContainer>
    </Wrap>
  );
};

export default PartnerSection;

const Wrap = styled.section`
  width: 100%;
  height: auto;
  padding: 150px 0; // 13.54

  @media screen and (max-width: 1024px) {
    padding: 80px 30px;
  }
`;

const TextSection = styled.div`
  padding: 0 260px;

  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    align-items: flex-start;
  }
`;

const TextTitle = styled.div`
  display: flex;

  gap: 13px;

  color: #000;

  font-family: Inter;
  font-size: 16px; // 0.833vw; // 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 114%; /* 18.24px */
  letter-spacing: -0.64px;

  @media screen and (max-width: 1024px) {
    align-items: flex-start;
  }

  .line {
    margin-top: 12px;
    width: 130px;
    border-bottom: 1px solid black;
  }
`;

const TextSub = styled.div`
  /* width: 30.04vw; */
  /* width: 404px; */
  margin-top: 15px;
  color: #0c0c0d;

  font-family: Pretendard;
  font-size: 2.08vw;
  font-style: normal;
  font-weight: 600;
  line-height: 2.86vw; // 60px; /* 120% */
  letter-spacing: -2px;
  text-transform: capitalize;

  .blue {
    color: #1855be;
  }

  @media screen and (max-width: 1024px) {
    .LogoWrap {
      width: 100px; // 작은 화면에서 로고 너비 조정
      height: 40px; // 작은 화면에서 로고 높이 조정
    }
  }
`;

// 로고 슬라이드 애니메이션을 정의
const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%); // 100% 이동하면, 로고가 반복됨
  }
`;

const LogoContainer = styled.div`
  width: 100%; // 컨테이너의 너비를 화면 폭에 맞춤
  overflow: hidden; // 내부 애니메이션이 흘러넘치지 않게 함
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background: #f9f9f9;
  padding: 62px 36px;
  margin-top: 75px;
  @media screen and (max-width: 1024px) {
    margin-top: 56px;
    height: 80px;
    padding: 20px 10px;
    gap: 5px;
  }
`;

const AnimatedContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 50px;
  animation: ${slideAnimation} 30s linear infinite;
  width: calc(200px * 60); // 로고 개수에 따라 조정
`;

const LogoWrap = styled.div`
  display: flex;
  width: 200px;
  height: 82px;
  padding: 27px 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const LogoImg = styled.img`
  min-width: 130px;
  min-height: 30px;

  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 20px;
  }
`;
