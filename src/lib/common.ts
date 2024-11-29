import type { FetchError } from "@/types";

export function isFetchError(data: any): data is FetchError {
  return (
    typeof data === "object" &&
    typeof data.type === "string" &&
    typeof data.message === "string" &&
    (typeof data.status === "number" || data.status === undefined)
  );
}
