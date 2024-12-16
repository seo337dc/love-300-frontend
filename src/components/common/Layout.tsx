"use client";

import { ScreenBoundary } from "@/common/constant";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { styled } from "styled-components";
import EclipseBackground from "../template/EclipseTemplate";
import { EXCEPTION_FOOTER_MENU } from "./constant";
import Footer from "./Footer";
import FooterMenu from "./FooterMenu";

type TProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TProps) => {
  const pathname = usePathname();

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
    <Wrap>
      <div className="min-h-screen">{children}</div>
      {EXCEPTION_FOOTER_MENU.includes(pathname) && <Footer />}
      {!EXCEPTION_FOOTER_MENU.includes(pathname) && <FooterMenu />}
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: ${ScreenBoundary.Phone2PC};
  min-height: 100vh;
  margin: 0 auto 100px;
`;
