import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import GlobalStyleWrapper from "../lib/GlobalStyleWrapper"; // 클라이언트 컴포넌트로 분리
import QueryProvider from "./queryProvider";
import Layout from "@/components/common/Layout";

export const metadata = {
  metadataBase: new URL("https://uniqueasset.io"),

  title: "Unique Assets",
  description: "RWA Project Evaluation",
  openGraph: {
    title: "RWA Project Evaluation",
    description: "Explore Real World Assets",
    url: "https://uniqueasset.io",
    images: [
      {
        url: new URL("/blue_2.png", "https://uniqueasset.io").toString(), // 절대 URL로 변경
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
        <QueryProvider>
          <StyledComponentsRegistry>
            <GlobalStyleWrapper>
              <Layout>{children}</Layout>
            </GlobalStyleWrapper>
          </StyledComponentsRegistry>
        </QueryProvider>
      </body>
    </html>
  );
}
