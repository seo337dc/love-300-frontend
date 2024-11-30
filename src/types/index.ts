export type TPatient = {
  emr_id: number; // EMR ID
  name: string; // 환자 이름
  status: Status; // 환자 상태
  sex: "M" | "F"; // 성별
  age: number; // 나이
  location: string; // 병실 위치 (예: ICU 101호)
  doctor: string; // 담당 의사
  department: string; // 진료 과목
  admission_dt: string; // 입원 날짜 및 시간
  alert: Alert; // 알림 정보
  screening_data: ScreeningData[]; // 스크리닝 데이터 배열
};

export type Alert = {
  type: TLab;
  value: number;
  date: string;
};

export type ScreeningData = {
  type: TLab; // 스크리닝 데이터 타입
  value: number; // 스크리닝 데이터 값
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
