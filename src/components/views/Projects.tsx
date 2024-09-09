"use client";

import { useState } from "react";
import { styled } from "styled-components";
import { useAtom } from "jotai";
import { Lang, langAtom } from "@/store/langStore";

const ProjectsSection = () => {
  const [lang] = useAtom(langAtom);
  const [opens, setOpens] = useState({ att: false, accf: false, otn: false });

  const downloadPDF = () => {
    const link = document.createElement("a");
    document.body.appendChild(link); // DOM에 link 요소를 추가
    link.href =
      lang === Lang.ENG
        ? "/whitepaper/ACCF_eng.pdf"
        : "/whitepaper/ACCF_kor.pdf";
    link.download = lang === Lang.ENG ? "ACCF_eng.pdf" : "ACCF_kor.pdf";
    link.click();
    link.remove(); // 다운로드 후 link 요소를 제거
  };

  const obj: Record<
    Lang,
    Record<"title" | "subTitle" | "description", string>
  > = {
    [Lang.ENG]: {
      title: "Project",
      subTitle: "Top-Rated RWA Projects",
      description: "Introduce key RWA projects provided on the platform.",
    },
    [Lang.KOR]: {
      title: "Top-Rated RWA Projects",
      subTitle: "RWA 주요 프로젝트",
      description: `유니크 플랫폼에서 제공하는 주요 RWA 프로젝트 소개합니다.`,
    },
  };

  return (
    <Wrap>
      <ProjectsContainer>
        <ProjectsWrap>
          <TextWrap>
            <TextTitle>
              <span>{obj[lang].title}</span>
              <div className="line" />
            </TextTitle>

            <TextSub>{obj[lang].subTitle}</TextSub>

            <TextDesc>{obj[lang].description}</TextDesc>
          </TextWrap>
        </ProjectsWrap>
      </ProjectsContainer>

      <ContentsContainer>
        <ContentWrap>
          <TokenImg src="/projects_ATT.png" alt="projects_ATT" />

          <ContentTextWrap>
            <p className="projects_title">ATT token</p>
            <p className="projects_desc">tetris tower</p>
          </ContentTextWrap>

          <IconSvg src="/plus_icon.png" alt="plus" rotate={opens.att} />
        </ContentWrap>

        <ContentWrap $isCenter={true}>
          <TokenImg src="/projects_ACCF.png" alt="projects_ACCF" />

          <ContentTextWrap>
            <p className="projects_title">ACCF Token</p>
            <p className="projects_desc">ASSET Chung Chun First</p>
          </ContentTextWrap>

          <IconSvg
            src="/plus_icon.png"
            alt="plus"
            rotate={opens.accf}
            onClick={downloadPDF}
          />
        </ContentWrap>

        <ContentWrap>
          <TokenImg src="/projects_OTN.png" alt="projects_OTN" />

          <ContentTextWrap>
            <p className="projects_title">OTN token</p>
            <p className="projects_desc">Christian Ontani</p>
          </ContentTextWrap>

          <IconSvg src="/plus_icon.png" alt="plus" rotate={opens.otn} />
        </ContentWrap>
      </ContentsContainer>
    </Wrap>
  );
};

export default ProjectsSection;

const Wrap = styled.section`
  width: 100%;
  height: auto;
  padding: 150px 13.54vw; // 13.54
  background: #fafafa;

  @media screen and (max-width: 1024px) {
    padding: 80px 20px;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 70px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    gap: 48px;
  }
`;

const ProjectsWrap = styled.div<{ $isRight?: boolean }>`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    align-items: flex-start;
  }
`;

const TextWrap = styled.div`
  width: 825px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 335px;
    padding: 0 20px;
    align-items: flex-start;
  }
`;

const TextTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  color: #000;

  font-family: Inter;
  font-size: 16px; // 0.833vw; // 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 114%; /* 18.24px */
  letter-spacing: -0.64px;

  .line {
    margin-top: 12px;
    width: 130px;
    border: 1px solid black;
  }
`;

const TextSub = styled.div`
  margin-top: 15px;

  color: #000;

  font-family: Pretendard;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px; /* 120% */
  letter-spacing: -2px;
  text-transform: capitalize;

  @media screen and (max-width: 1024px) {
    font-family: Inter;
    font-size: 33px;
    line-height: 43px; /* 130.303% */
    letter-spacing: -1.32px;
  }
`;

const TextDesc = styled.div`
  margin-top: 17px;
  color: #4d4d4d;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px; /* 168.75% */
  text-transform: capitalize;
  overflow-wrap: break-word; /* 어절이 너무 길 경우 줄바꿈 */

  @media screen and (max-width: 1024px) {
    margin-top: 24px;
    font-size: 15px;
  }
`;

const ContentsContainer = styled.div`
  width: 100%;
  margin-top: 86px;
  display: flex;
  gap: 1.8vw; // 40px;
  justify-content: center; // 모든 ContentWrap을 가운데 정렬

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 9px;
  }
`;

const ContentWrap = styled.div<{ $isCenter?: boolean }>`
  height: 25.98vw;

  display: flex;
  flex-direction: column;
  align-items: center; // 내부 요소 중앙 정렬
  justify-content: flex-start; // 상단에서 시작
  padding: 2.395vw 5.52vw;
  gap: 1.354vw; // 26px;
  background: #f2f2f2;

  margin-top: ${({ $isCenter }) =>
    $isCenter ? "40px" : "0"}; // 조건부 마진 적용

  cursor: pointer;

  @media screen and (max-width: 1024px) {
    padding-top: 23px;
    height: 352px;
    margin-top: 0;
  }
`;

const TokenImg = styled.img`
  width: 11.875vw; //228px;
  height: 11.875vw; // 227px;

  @media screen and (max-width: 1024px) {
    width: 190px;
    height: 190px;
  }
`;

const ContentTextWrap = styled.div`
  /* width: 22.91vw; //  440px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;

  .projects_title {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.198vw; // 23px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.458vw; // 28px; /* 121.739% */
    letter-spacing: -0.46px;
    text-transform: capitalize;

    @media screen and (max-width: 1024px) {
      margin-top: 7px;
      font-size: 20px;
      line-height: 100%; /* 20px */
    }
  }

  .projects_desc {
    color: #858585;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.04vw; // 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 140% */
    letter-spacing: -0.4px;
    text-transform: capitalize;

    @media screen and (max-width: 1024px) {
      font-size: 15px;
    }
  }
`;

const IconSvg = styled.img<{ rotate: boolean }>`
  width: 3.02vw; //  58px; // 3.02vw; //58px;
  height: 3.02vw; // 58px; //
  cursor: pointer;
  transition: transform 0.3s; // 부드러운 트랜지션 효과

  transform: ${({ rotate }) => (rotate ? "rotate(45deg)" : "rotate(0)")};

  @media screen and (max-width: 1024px) {
    width: 44px;
    height: 44px;
  }
`;
