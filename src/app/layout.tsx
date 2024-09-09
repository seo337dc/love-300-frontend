import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "jotai";
import "./globals.css";

import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import GlobalStyleWrapper from "../lib/GlobalStyleWrapper"; // 클라이언트 컴포넌트로 분리

export const metadata = {
  metadataBase: new URL("https://uniqueasset.io"), // 배포시 반드시 필요한 설정

  title: "Unique Assets",
  description: "RWA Project Evaluation",
  openGraph: {
    title: "RWA Project Evaluation",
    description: "Explore Real World Assets",
    url: "https://uniqueasset.io",
    images: [
      {
        url: "/opengraph-logo.png", // 절대 URL을 사용하세요
        alt: "Unique Asset Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <StyledComponentsRegistry>
            <GlobalStyleWrapper>{children}</GlobalStyleWrapper>
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
