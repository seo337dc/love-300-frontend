import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "jotai";
import "./globals.css";

import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import GlobalStyleWrapper from "../lib/GlobalStyleWrapper"; // 클라이언트 컴포넌트로 분리

export const metadata: Metadata = {
  title: "Unique assets",
  description: "RWA project evalution",
  openGraph: {
    title: "RWA project evalution",
    description: "RWA project evalution",
    url: "https://uniqueasset.io/",
    images: [
      {
        url: "/logo.png",
        alt: "이미지 설명",
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
