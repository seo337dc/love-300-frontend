import type { MenuType, TImg } from "@/types/common";

export interface IMenu extends TImg {
  value: MenuType;
}

export const MENU_LIST: IMenu[] = [
  {
    fileName: "menu-main",
    name: "홈",
    value: "main",
  },
  {
    fileName: "menu-payment",
    name: "결제",
    value: "payment",
  },
  {
    fileName: "menu-history",
    name: "내역",
    value: "transaction",
  },
  {
    fileName: "menu-user",
    name: "내 정보",
    value: "user",
  },
];

export const MAIN_MENU_LIST: IMenu[] = [
  {
    fileName: "menu-staking.png",
    name: "스테이킹",
    value: "staking",
  },
  {
    fileName: "menu-dollar.png",
    name: "송금",
    value: "send",
  },
  {
    fileName: "menu-lockup.png",
    name: "락업",
    value: "lockup",
  },
];

export const EXCEPTION_FOOTER_MENU: string[] = ["/", "/sign-up"];

export const EXCEPTION_ECLIPSE: string[] = ["/", "/sign-up", "/send"];
