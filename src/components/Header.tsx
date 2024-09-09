"use client";

import { styled } from "styled-components";
import { useAtom } from "jotai";
import { getMediaQueryCSS } from "@/common/util";
import { Lang, langAtom } from "@/store/langStore";

const Header = () => {
  const [lang, setLang] = useAtom(langAtom);

  return (
    <Wrap>
      <div className="flex items-center gap-[2px]">
        <LogoImg src="/white_3.png" alt="로고" />
      </div>

      <MenuContainer>
        <MenuText>About</MenuText>
        <MenuText>Methodology</MenuText>
        <MenuText>Key Feature</MenuText>
        <MenuText>Project</MenuText>
      </MenuContainer>

      <div className="flex gap-1">
        <Switch $selected={lang === Lang.KOR} onClick={() => setLang(Lang.KOR)}>
          KR
        </Switch>
        <Switch $selected={lang === Lang.ENG} onClick={() => setLang(Lang.ENG)}>
          EN
        </Switch>
      </div>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  position: absolute;

  top: 29px;
  left: 6.25vw;
  width: 87.46vw;
  height: 74px;
  padding: 7px 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    top: 10px;
    left: 0;
    width: 100%;
    height: 32px;

    padding: 0 20px;
  }
`;

const LogoImg = styled.img`
  width: auto;
  height: 0.9vw;

  @media screen and (max-width: 1024px) {
    width: 22px;
    height: 17.286px;
  }
`;

const LogoText = styled.span`
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const MenuContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 2.91vw;

  ${getMediaQueryCSS(`
    display: none;
    `)}
`;

const MenuText = styled.span`
  color: #fff;

  text-align: center;
  font-family: Inter;
  font-size: 0.83vw; // 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.32px;
`;

const Switch = styled.div<{ $selected: boolean }>`
  width: 80px;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: #fff;

  text-align: center;
  font-family: Pretendard;
  font-size: 0.83vw;
  font-style: normal;
  font-weight: 400;

  border-radius: 999px;
  background: ${({ $selected }) => ($selected ? "#1855be" : "none")};
  border: ${({ $selected }) => ($selected ? "none" : "1px solid #fff")};
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    height: 32px;
    width: 50px;
    font-size: 14px;
  }
`;
