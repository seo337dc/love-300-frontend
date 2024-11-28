import { Status } from "@/types";

type TProps = {
  status: Status;
};

const statusClassMap: Record<Status, string> = {
  [Status.SCREENED]: "bg-screened_bg text-screened_text",
  [Status.OBSERVING]: "bg-observing_bg text-observing_text",
  [Status.DONE]: "bg-done_bg text-done_text",
  [Status.ERROR]: "bg-error_bg text-error_text",
  [Status.DNR]: "bg-dnr_bg text-dnr_text",
};

const Label = ({ status }: TProps) => {
  return (
    <div
      className={`px-2 py-1 rounded-lg text-sm text-center font-bold ${statusClassMap[status]}`}
    >
      {status}
    </div>
  );
};

export default Label;
