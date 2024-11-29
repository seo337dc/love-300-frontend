export type TPatient = {
  emr_id: number;
  name: string;
  status: Status;
  sex: "M" | "F";
  age: number;
  location: string; // ICU
  doctor: string;
  department: string; // 신경학과
  admission_dt: string; // Date?
  alert: Alter;
  //   screening_data: TLab[]; // 대기
};

export type Alter = {
  type: TLab;
  value: number;
  date: string;
};

export enum Status {
  SCREENED = "신규", // "SCREENED",
  OBSERVING = "관찰중", // "OBSERVING",
  DONE = "완료", //  "DONE",
  ERROR = "오류", //  "ERROR",
  DNR = "DNR", //  "DNR",
}

export type TLab = "DBP" | "PR" | "RR" | "BT" | "SBP";

export type FetchError = {
  type: "http" | "network";
  status?: number;
  message: string;
};
