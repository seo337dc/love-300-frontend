"use client";

import { styled } from "styled-components";
import { useAtom } from "jotai";
import { Lang, langAtom } from "@/store/langStore";

const Feature = () => {
  const [lang] = useAtom(langAtom);

  const obj: Record<Lang, Record<"title", string>> = {
    [Lang.ENG]: {
      title: "Platform Key Features",
    },
    [Lang.KOR]: {
      title: "플랫폼 주요 기능",
    },
  };

  const objFeature1: Record<
    Lang,
    Record<"title" | "subTitle" | "description", string>
  > = {
    [Lang.ENG]: {
      title: "RWA Projects",
      subTitle: "Search and Evaluation",
      description: `Users can search for RWA projects of interest and check their
      evaluation grades and detailed information, including project value
      assessments, analysis methods, and related reports.`,
    },
    [Lang.KOR]: {
      title: "RWA 프로젝트 ",
      subTitle: "검색 및 평가 정보 제공",
      description: `사용자는 관심 있는 RWA 프로젝트를 검색하고, 해당 프로젝트의 평가 등급과 상세 정보를 확인할 수 있습니다. 여기에는 프로젝트 가치 평가, 분석 방법, 관련 리포트 등이 포함됩니다.`,
    },
  };

  const objFeature2: Record<
    Lang,
    Record<"title" | "subTitle" | "description", string>
  > = {
    [Lang.ENG]: {
      title: "Real-time Evaluation ",
      subTitle: "Updates and Monitoring",
      description: `Users can search for RWA projects of interest and check their
    evaluation grades and detailed information, including project value
    assessments, analysis methods, and related reports.`,
    },
    [Lang.KOR]: {
      title: "실시간 평가 ",
      subTitle: "업데이트 및 모니터링",
      description: `평가된 RWA 프로젝트의 상태와 등급이 실시간으로 업데이트되며, 사용자는 이를 모니터링하여 최적의 투자 결정을 내릴 수 있습니다.`,
    },
  };

  const objFeature3: Record<
    Lang,
    Record<"title" | "subTitle" | "description", string>
  > = {
    [Lang.ENG]: {
      title: "Customized Investment ",
      subTitle: "Analysis and Recommendations",
      description: `Users receive customized analysis reports tailored to their investment preferences, along with investment recommendations based on these reports.`,
    },
    [Lang.KOR]: {
      title: "맞춤형 투자 ",
      subTitle: "분석 및 추천",
      description: `사용자는 자신의 투자 성향에 맞춰 맞춤형 분석 리포트를 제공받고, 이를 기반으로 한 투자 추천을 받을 수 있습니다.`,
    },
  };

  return (
    <Wrap>
      <FeatureContainer>
        <FeatureWrap>
          <TextWrap>
            <TextTitle>
              <span>Key Features</span>
              <div className="line" />
            </TextTitle>

            <TextSub>{obj[lang].title}</TextSub>
          </TextWrap>
        </FeatureWrap>
      </FeatureContainer>

      <div className="mt-[215px] flex gap-[34px] max-[1024px]:flex-col max-[1024px]:mt-[79px]">
        <FeatureCard>
          <div className="flex gap-1">
            <span>1.</span>

            {lang === Lang.ENG ? (
              <div>
                <p>{objFeature1[lang].title}</p>
                <FeatureSub>{objFeature1[lang].subTitle}</FeatureSub>
              </div>
            ) : (
              <div className="flex">
                <p>{objFeature1[lang].title}</p>
                <FeatureSub className="ml-1">
                  {objFeature1[lang].subTitle}
                </FeatureSub>
              </div>
            )}
          </div>

          <FeatureImg src="/feature_rwa.png" alt="feature_rwa" />
          {objFeature1[lang].description && (
            <FeatureDesc className="mt-4">
              {objFeature1[lang].description}
            </FeatureDesc>
          )}
        </FeatureCard>

        <FeatureCard>
          <div className="flex gap-1">
            <span>2.</span>
            {lang === Lang.ENG ? (
              <div>
                <p>{objFeature2[lang].title}</p>
                <FeatureSub>{objFeature1[lang].subTitle}</FeatureSub>
              </div>
            ) : (
              <div className="flex">
                <p>{objFeature2[lang].title}</p>
                <FeatureSub className="ml-1">
                  {objFeature1[lang].subTitle}
                </FeatureSub>
              </div>
            )}
          </div>

          <FeatureImg src="/feature_monitoring.png" alt="feature_monitoring" />
          {objFeature1[lang].description && (
            <FeatureDesc className="mt-4">
              {objFeature1[lang].description}
            </FeatureDesc>
          )}
        </FeatureCard>

        <FeatureCard>
          <div className="flex gap-1">
            <span>3.</span>
            {lang === Lang.ENG ? (
              <div>
                <p>{objFeature3[lang].title}</p>
                <FeatureSub>{objFeature3[lang].subTitle}</FeatureSub>
              </div>
            ) : (
              <div className="flex">
                <p>{objFeature3[lang].title}</p>{" "}
                <FeatureSub className="ml-1">
                  {objFeature3[lang].subTitle}
                </FeatureSub>
              </div>
            )}
          </div>

          <FeatureImg src="/feature_custom.png" alt="feature_custom" />
          <FeatureDesc className="mt-4">
            {objFeature1[lang].description}
          </FeatureDesc>
        </FeatureCard>
      </div>
    </Wrap>
  );
};

export default Feature;

const Wrap = styled.section`
  width: 100%;
  padding: 150px 13.54vw; // 13.54

  @media screen and (max-width: 1024px) {
    padding: 80px 20px;
  }
`;

const FeatureContainer = styled.div`
  width: 73.33vw; // 1408px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    gap: 48px;
  }
`;

const FeatureWrap = styled.div<{ $isRight?: boolean }>`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: ${({ $isRight }) => ($isRight ? "flex-end" : "flex-start")};

  @media screen and (max-width: 1024px) {
    align-items: flex-start;
  }
`;

const TextWrap = styled.div`
  width: 825px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media screen and (max-width: 1024px) {
    width: 335px;
    padding: 0;
    gap: 40px;
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
  /* text-transform: capitalize; */

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
    width: 280px;
    font-family: Inter;
    font-size: 33px;
    line-height: 43px; /* 130.303% */
    letter-spacing: -1.32px;
  }
`;

const FeatureCard = styled.div`
  width: 23.12vw; // 444px;
  font-size: 20px;
  line-height: 28px; /* 140% */

  @media screen and (max-width: 1024px) {
    width: 100%;
    line-height: 25px;
  }
`;

const FeatureSub = styled.p`
  color: #1855be;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.4px;
  text-transform: capitalize;

  @media screen and (max-width: 1024px) {
    font-size: 17px;
  }
`;

const FeatureImg = styled.img`
  width: 100%;
  height: 7.86vw; // 151px;
  margin-top: 15px;

  @media screen and (max-width: 1024px) {
    height: 151px;
    margin-top: 10px;
  }
`;

const FeatureDesc = styled.p`
  color: #4d4d4d;

  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 146.667% */

  @media screen and (max-width: 1024px) {
    margin-top: 10px;
  }
`;
