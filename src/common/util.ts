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

export const REG_ENG = /[a-zA-Z]/;
export const REG_PWD_NUM = /\d/;
export const REG_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const REG_BAN_KR = /[\uac00-\ud7af\u3131-\u318e]/;
export const REG_PWD = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$])[A-Za-z\d!@#$]{8,}$/;
