import { ScreenBoundary } from "./constant";

export const getMediaQueryCSS = (
  cssProperties: string,
  boundary: string = ScreenBoundary.Phone2PC
) => `
    @media screen and (max-width: ${boundary}) {
        ${cssProperties}
    }
`;

// 숫자 형식 변환 함수
export const formatNumber = (value: string) => {
  const numberValue = value.replace(/,/g, ""); // 쉼표 제거
  if (!numberValue) return "";
  return parseFloat(numberValue).toLocaleString("en-US"); // 쉼표 추가
};
