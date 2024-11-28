import { Status, TPatient } from "@/types";

export const TEST_DATA: TPatient[] = [
  {
    emr_id: 12345,
    name: "김환자",
    status: Status.SCREENED,
    sex: "M",
    age: 63,
    location: "ICU 124호 11",
    doctor: "장의사",
    department: "신경외과",
    admission_dt: "2023.12.11",
    alert: {
      type: "BT", // 대기
      value: 188.0,
      date: "01.23 14:05",
    },
  },

  {
    emr_id: 234123,
    name: "이환자",
    status: Status.OBSERVING,
    sex: "F",
    age: 63,
    location: "ICU 124호 15",
    doctor: "이의사",
    department: "신경외과",
    admission_dt: "2023.12.11",
    alert: {
      type: "DBP", // 대기
      value: 188.0,
      date: "01.23 14:05",
    },
  },

  {
    emr_id: 234124,
    name: "이환자",
    status: Status.DONE,
    sex: "F",
    age: 63,
    location: "ICU 124호 15",
    doctor: "이의사",
    department: "신경외과",
    admission_dt: "2023.12.11",
    alert: {
      type: "DBP", // 대기
      value: 188.0,
      date: "01.23 14:05",
    },
  },

  {
    emr_id: 234126,
    name: "이환자",
    status: Status.ERROR,
    sex: "F",
    age: 63,
    location: "ICU 124호 15",
    doctor: "이의사",
    department: "신경외과",
    admission_dt: "2023.12.11",
    alert: {
      type: "DBP", // 대기
      value: 188.0,
      date: "01.23 14:05",
    },
  },

  {
    emr_id: 334126,
    name: "이환자",
    status: Status.DNR,
    sex: "F",
    age: 63,
    location: "ICU 124호 15",
    doctor: "이의사",
    department: "신경외과",
    admission_dt: "2023.12.11",
    alert: {
      type: "DBP", // 대기
      value: 188.0,
      date: "01.23 14:05",
    },
  },
];
