"use client";

import React from "react";
import { createGlobalStyle } from "styled-components";
import { Colors, Fonts } from "@/common/constant";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('/fonts/Pretendard-Thin.woff2') format('woff2'),
         url('/fonts/Pretendard-Thin.woff') format('woff'),
         url('/fonts/Pretendard-Thin.ttf') format('truetype'),
         url('/fonts/Pretendard-Thin.otf') format('opentype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('/fonts/Pretendard-ExtraLight.woff2') format('woff2'),
         url('/fonts/Pretendard-ExtraLight.woff') format('woff'),
         url('/fonts/Pretendard-ExtraLight.ttf') format('truetype'),
         url('/fonts/Pretendard-ExtraLight.otf') format('opentype');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('/fonts/Pretendard-Light.woff2') format('woff2'),
         url('/fonts/Pretendard-Light.woff') format('woff'),
         url('/fonts/Pretendard-Light.ttf') format('truetype'),
         url('/fonts/Pretendard-Light.otf') format('opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2'),
         url('/fonts/Pretendard-Regular.woff') format('woff'),
         url('/fonts/Pretendard-Regular.ttf') format('truetype'),
         url('/fonts/Pretendard-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('/fonts/Pretendard-Medium.woff2') format('woff2'),
         url('/fonts/Pretendard-Medium.woff') format('woff'),
         url('/fonts/Pretendard-Medium.ttf') format('truetype'),
         url('/fonts/Pretendard-Medium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('/fonts/Pretendard-SemiBold.woff2') format('woff2'),
         url('/fonts/Pretendard-SemiBold.woff') format('woff'),
         url('/fonts/Pretendard-SemiBold.ttf') format('truetype'),
         url('/fonts/Pretendard-SemiBold.otf') format('opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('/fonts/Pretendard-Bold.woff2') format('woff2'),
         url('/fonts/Pretendard-Bold.woff') format('woff'),
         url('/fonts/Pretendard-Bold.ttf') format('truetype'),
         url('/fonts/Pretendard-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('/fonts/Pretendard-ExtraBold.woff2') format('woff2'),
         url('/fonts/Pretendard-ExtraBold.woff') format('woff'),
         url('/fonts/Pretendard-ExtraBold.ttf') format('truetype'),
         url('/fonts/Pretendard-ExtraBold.otf') format('opentype');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('/fonts/Pretendard-Black.woff2') format('woff2'),
         url('/fonts/Pretendard-Black.woff') format('woff'),
         url('/fonts/Pretendard-Black.ttf') format('truetype'),
         url('/fonts/Pretendard-Black.otf') format('opentype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

body {
  font-family: 'Pretendard-Regular', sans-serif;
}
  html,body {
    min-height: 100%;
    scroll-behavior: smooth !important;
    overflow: auto; /* 스크롤 가능 */
  }
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }
  body {
    background-color: ${Colors.White};
  }
  button {
      outline: none;
      border: 0;
      cursor: pointer;
  }  
  ol, ul {
  	list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: '';
  	content: none;
  }
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }
  * {
    box-sizing: border-box;
    /* -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none; */
    font-family: ${Fonts.Pretendard};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  #__next{
    min-height: 100vh;
    height: 100%;
  }
`;

export default function GlobalStyleWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
