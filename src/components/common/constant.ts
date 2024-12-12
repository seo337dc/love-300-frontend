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
