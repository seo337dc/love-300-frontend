import type { TTransaction } from "@/types/transaction";

export enum RecentTypeLabel {
  send = "송금",
  lockup = "락업",
  stacking = "스테이킹",
  deposit = "입금",
}

export const TRANSACTION_DATA: TTransaction[] = [
  {
    id: "d859390524f10a499a7200581cda636e277c3b9e6",
    date: "2024-11-24T18:06:00.000Z",
    type: "send",
    value: "-100",
  },
  {
    id: "d859390524f10a499a7200581cda636e277c3b9e7",
    date: "2024-11-24T18:06:00.000Z",
    type: "deposit",
    value: "+100",
  },
  {
    id: "d859390524f10a499a7200581cda636e277c3b9e8",
    date: "2024-11-24T18:06:00.000Z",
    type: "lockup",
    value: "-100",
  },
  {
    id: "d859390524f10a499a7200581cda636e277c3b9e9",
    date: "2024-11-24T18:06:00.000Z",
    type: "stacking",
    value: "+100",
  },
  {
    id: "d159390524f10a499a7200581cda636e277c3b9e6",
    date: "2024-11-24T18:06:00.000Z",
    type: "send",
    value: "-100",
  },
  {
    id: "d259390524f10a499a7200581cda636e277c3b9e6",
    date: "2024-11-24T18:06:00.000Z",
    type: "deposit",
    value: "+100",
  },
  {
    id: "d359390524f10a499a7200581cda636e277c3b9e6",
    date: "2024-11-24T18:06:00.000Z",
    type: "lockup",
    value: "-100",
  },
  {
    id: "d459390524f10a499a7200581cda636e277c3b9e6",
    date: "2024-11-24T18:06:00.000Z",
    type: "stacking",
    value: "+100",
  },
];
