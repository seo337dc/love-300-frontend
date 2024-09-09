"use client";

import { styled } from "styled-components";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { useAtom } from "jotai";
import { Lang, langAtom } from "@/store/langStore";

const Footer = () => {
  const [lang] = useAtom(langAtom);
  const obj: Record<Lang, Record<"description" | "button", string>> = {
    [Lang.ENG]: {
      description: `We will send you the latest RWA evaluation updates and investment information via email`,
      button: "subscribe",
    },
    [Lang.KOR]: {
      description: `최신 RWA 평가 소식과 투자 정보를 메일로 전달드립니다.`,
      button: "구독하기",
    },
  };

  return (
    <Wrap>
      <NewsWrap>
        <NewsTitle>Newsletter</NewsTitle>
        <NewsDesc>{obj[lang].description}</NewsDesc>

        <EmailInputWrap>
          <InputTitle>Email</InputTitle>
          <EmailInput />
          <SubBtn>{obj[lang].button}</SubBtn>
        </EmailInputWrap>
      </NewsWrap>
      <ConcatWrap>
        <MenuWrap>
          <LogoWrap>
            <LogoImg src="/white_2.png" alt="logo" />
          </LogoWrap>

          <MenuContainer>
            <span className="text">About</span>
            <span className="text">Methodology</span>
            <span className="text">Key Feature</span>
            <span className="text">Project</span>
          </MenuContainer>

          <SocialContainer>
            <SocialImg>
              <FaTwitter size={20} color="#fff" />
            </SocialImg>
            <SocialImg>
              <FaFacebookF size={20} color="#fff" />
            </SocialImg>

            <SocialImg>
              <FaInstagram size={20} color="#fff" />
            </SocialImg>
          </SocialContainer>
        </MenuWrap>

        <FooterTitle>
          Copyright 2024 Unique Asset CO., LTD. All Right Reserved.
        </FooterTitle>
      </ConcatWrap>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 7.81vw 5.72vw 1.35vw;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8.43vw; //  162px;
  background: linear-gradient(
      0deg,
      rgba(44, 44, 54, 0.43) 0%,
      rgba(44, 44, 54, 0.43) 100%
    ),
    url("/footer.jpg") lightgray -38px -225px / 103.75% 210.671% no-repeat;

  @media screen and (max-width: 1024px) {
    background: linear-gradient(
        0deg,
        rgba(44, 44, 54, 0.43) 0%,
        rgba(44, 44, 54, 0.43) 100%
      ),
      url("/footer_m.jpg") lightgray 50% / cover no-repeat;
  }
`;

const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const NewsWrap = styled.div`
  width: 45.14vw; // 790px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const NewsTitle = styled.p`
  color: #fff;

  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px; /* 120% */
  letter-spacing: -2px;
  text-transform: capitalize;

  @media screen and (max-width: 1024px) {
    font-size: 35px;
    height: 52.606px;
  }
`;

const NewsDesc = styled.p`
  margin-top: 18px;
  color: #bfc1d5;

  text-align: center;
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 147.368% */
  letter-spacing: -0.38px;
  text-transform: capitalize;

  @media screen and (max-width: 1024px) {
    width: 325px;
    font-size: 15px;
  }
`;

const EmailInputWrap = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const InputTitle = styled.p`
  color: #fff;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.28px;
`;

const EmailInput = styled.input`
  /* width: 272px; */
  width: 14.16vw;
  display: flex;
  padding: 0.52vw 0.72vw;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--Gray-300, #d0d5dd);
  background: var(--White, #fff);

  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 10px 14px;
  }
`;

const SubBtn = styled.button`
  display: flex;
  padding: 14px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #1855be;

  color: #fff;

  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
  letter-spacing: -0.5px;
`;

const ConcatWrap = styled.div`
  width: 88.54vw; // 1700px;
  height: 6.97vw; // 134px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 4px;
`;

const LogoImg = styled.img`
  width: auto;
  height: 44px;
`;

const LogoTitle = styled.p`
  width: 80px;
  color: #fff;

  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px; /* 105% */
  letter-spacing: -0.6px;
`;

const MenuWrap = styled.div`
  width: 100%;
  height: 52px;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    /* gap: 18px; */
  }
`;

const MenuContainer = styled.div`
  display: flex;
  width: 650px;
  height: 30px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 70px;
  flex-shrink: 0;

  @media screen and (max-width: 1024px) {
    display: none;
  }

  .text {
    color: #fff;

    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 160% */
    letter-spacing: -0.3px;
  }
`;

const SocialContainer = styled.div`
  width: 112.8px;
  height: 33.6px;
  flex-shrink: 0;
  display: flex;
  gap: 5px;
  @media screen and (max-width: 1024px) {
    padding: 18px 0;
    height: auto;
  }
`;

const SocialImg = styled.div`
  width: 33px; // 컨테이너 크기를 조금 더 크게 조정
  height: 33px; // 컨테이너 크기를 조금 더 크게 조정
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: #313238;
`;

const FooterTitle = styled.div`
  text-align: center;
  width: 465px;
  height: 27px;
  flex-shrink: 0;

  color: #8d9095;

  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.14px;

  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;
