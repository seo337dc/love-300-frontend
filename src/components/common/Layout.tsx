"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { styled } from "styled-components";

import EclipseBackground from "../template/EclipseTemplate";
import { ScreenBoundary } from "@/common/constant";
import { EXCEPTION_ECLIPSE, EXCEPTION_FOOTER_MENU } from "./constant";
import Footer from "./Footer";
import FooterMenu from "./FooterMenu";

type TProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TProps) => {
  const pathname = usePathname();

  // /staking 경로와 그 하위 경로들을 처리
  const isStakingPath = pathname.startsWith("/staking");
  const isStakingDepositOrNumber = /^\/staking(\/deposit\/\d+|\/\d+)$/.test(
    pathname
  );

  // /staking, /staking/숫자, /staking/deposit/숫자 경로에서 isShowEclipse를 false로 설정
  const isShowEclipse = !(
    (isStakingPath && isStakingDepositOrNumber) ||
    EXCEPTION_ECLIPSE.includes(pathname)
  );

  useEffect(() => {
    const inAppRegExp =
      /inapp|KAKAOTALK|NAVER|Line\/|FB_IAB|FB4A|FBAN\/FBIOS|Instagram|DaumDevice\/mobile|SamsungBrowser\/[^1]/i;
    const androidRegExp = /Android/i;
    const iPhoneRegExp = /iPhone/i;
    if (navigator?.userAgent?.match(inAppRegExp)) {
      const removeHttps = location.href.replace("https://", "");
      if (navigator?.userAgent?.match(androidRegExp)) {
        location.href = `intent://${removeHttps}#Intent;scheme=https;package=com.android.chrome;end`;
      } else if (navigator?.userAgent?.match(iPhoneRegExp)) {
        location.href = `googlechromes://${removeHttps}`;
      }
    }
  }, []);

  return (
    <EclipseBackground isShowEclipse={isShowEclipse}>
      <Wrap>
        <div className="min-h-screen">{children}</div>
        {EXCEPTION_FOOTER_MENU.includes(pathname) && <Footer />}
        {!EXCEPTION_FOOTER_MENU.includes(pathname) && <FooterMenu />}
      </Wrap>
    </EclipseBackground>
  );
};

export default Layout;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: ${ScreenBoundary.Phone2PC};
  min-height: 100vh;
  margin: 0 auto 100px;
  overflow: auto;
`;
