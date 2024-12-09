"use client";

import { ScreenBoundary } from "@/common/constant";
import { useEffect } from "react";
import { styled } from "styled-components";
import Footer from "./Footer";

type TProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: TProps) => {
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
      <div>{children}</div>
      <Footer />
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  width: 100%;
  max-width: ${ScreenBoundary.Phone2PC};
  margin: 0 auto 100px;
  padding: 100px 0px;
  min-height: 100vh;
`;
