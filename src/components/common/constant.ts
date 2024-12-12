import type { MenuType, TImg } from "@/types/common";

export interface IMenu extends TImg {
  value: MenuType;
}

export const MENU_LIST: IMenu[] = [
  {
    fileName: "menu-home",
    name: "홈",
    value: "home",
  },
  {
    fileName: "menu-qr",
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
