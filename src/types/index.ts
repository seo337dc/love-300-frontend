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

export type Status = "SCREENED" | "OBSERVING" | "DONE" | "DNR" | "ERROR";
export type FilterStatus = {
  selected: boolean;
  value: Status;
};

export type TLab = "DBP" | "PR" | "RR" | "BT" | "SBP";

export type FetchError = {
  type: "http" | "network";
  status?: number;
  message: string;
};

export interface PaginationResponse {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
}
