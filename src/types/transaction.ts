export type TRecentType = "send" | "lockup" | "stacking" | "deposit";

export type TTransaction = {
  id: string;
  date: string;
  type: TRecentType;
  value: string;
};
