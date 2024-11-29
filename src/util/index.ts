import type { FilterStatus, Status } from "@/types";

export const STATUS_LIST: FilterStatus[] = [
  {
    selected: true,
    value: "SCREENED",
  },
  {
    selected: true,
    value: "OBSERVING",
  },
  {
    selected: true,
    value: "DONE",
  },
  {
    selected: true,
    value: "ERROR",
  },
  {
    selected: true,
    value: "DNR",
  },
];

// 라벨 value 한글화
export const statusLabelMap: Record<Status, string> = {
  SCREENED: "신규",
  OBSERVING: "관찰 중",
  DONE: "완료",
  ERROR: "오류",
  DNR: "DNR",
};
