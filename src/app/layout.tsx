import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import GlobalStyleWrapper from "../lib/GlobalStyleWrapper"; // 클라이언트 컴포넌트로 분리
import QueryProvider from "./queryProvider";
import Layout from "@/components/common/Layout";

export const metadata = {
  metadataBase: new URL("https://main.d3ul6iwjjpj07q.amplifyapp.com/"),

  title: "Love 300",
  description: "Love 300",
  openGraph: {
    title: "Love 300",
    description: "Love 300",
    url: "https://main.d3ul6iwjjpj07q.amplifyapp.com/",
    images: [
      {
        url: new URL(
          "/images/logo.png",
          "https://main.d3ul6iwjjpj07q.amplifyapp.com/"
        ).toString(), // 절대 URL로 변경
        alt: "Love 300",
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
