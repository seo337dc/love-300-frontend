import type { ResponseModelAll } from "@/lib/api";
import type { FilterStatus, Status, TPatient } from "@/types";

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

export const DEFAULT_SCREEN_DATA = {
  SBP: 0,
  DBP: 0,
  PR: 0,
  RR: 0,
  BT: 0,
};

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

export const sortPatientData = (
  resultList: TPatient[],
  sortType: string,
  orderType: "up" | "down" | "none"
): TPatient[] => {
  console.log("sortType1", sortType);
  const sortOrder = orderType === "down" ? -1 : 1; // 내림차순: -1, 오름차순: 1

  if (sortType === "emr_id") {
    return resultList.sort((a, b) => (a.emr_id - b.emr_id) * sortOrder);
  }

  if (sortType === "alert_date") {
    return resultList.sort((a, b) => {
      const dateA = new Date(a.alert.date).getTime();
      const dateB = new Date(b.alert.date).getTime();
      return (dateA - dateB) * sortOrder;
    });
  }

  if (["SBP", "DBP", "PR", "RR", "BT"].includes(sortType)) {
    return resultList.sort((a, b) => {
      const valueA =
        a.screening_data.find((data) => data.type === sortType)?.value || 0;
      const valueB =
        b.screening_data.find((data) => data.type === sortType)?.value || 0;
      return (valueB - valueA) * sortOrder;
    });
  }

  // 기본 정렬
  return resultList;
};
