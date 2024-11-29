import type { ResponseModelAll } from "@/lib/api";
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

// 갯수 관련 노출

export const outputStatusCtn = (type: Status, info: ResponseModelAll) => {
  switch (type) {
    case "SCREENED":
      return info.screenedCtn;
    case "OBSERVING":
      return info.obeservingCtn;
    case "ERROR":
      return info.errorCtn;
    case "DONE":
      return info.doneCtn;
    case "DNR":
      return info.dnrCtn;

    default:
      break;
  }
};
