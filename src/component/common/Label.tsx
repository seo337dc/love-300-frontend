import type { Status } from "@/types";

type TProps = {
  status: Status;
};

// 스타일
const statusClassMap: Record<Status, string> = {
  SCREENED: "bg-screened_bg text-screened_text",
  OBSERVING: "bg-observing_bg text-observing_text",
  DONE: "bg-done_bg text-done_text",
  ERROR: "bg-error_bg text-error_text",
  DNR: "bg-dnr_bg text-dnr_text",
};

// 라벨 value 한글화
const statusLabelMap: Record<Status, string> = {
  SCREENED: "신규",
  OBSERVING: "관찰중",
  DONE: "완료",
  ERROR: "오류",
  DNR: "DNR",
};

const Label = ({ status }: TProps) => {
  const style = statusClassMap[status] || "bg-gray-200 text-gray-600"; // 스타일 클래스, 기본 값

  return (
    <div
      className={`px-2 py-1 rounded-lg text-sm text-center font-bold ${style}`}
    >
      {statusLabelMap[status] || "-"}
    </div>
  );
};

export default Label;
