import { create } from "zustand";

export type SortState = {
  sortType: string;
  setSort: (value: string) => void;
  orderType: "up" | "down" | "none";
  setOrder: (value: "up" | "down" | "none") => void;
  clear: () => void;
};

export const useSortStore = create<SortState>((set) => ({
  sortType: "emr_id",
  orderType: "down", // 기본값: 내림차순
  setSort: (value) => set({ sortType: value }),
  setOrder: (value: "up" | "down" | "none") => set({ orderType: value }),
  clear: () => set({ sortType: "", orderType: "down" }),
}));
