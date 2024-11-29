import type { FetchError } from "@/types";

// fetch api error 확인 함수
export function isFetchError(data: any): data is FetchError {
  return (
    typeof data === "object" &&
    typeof data.type === "string" &&
    typeof data.message === "string" &&
    (typeof data.status === "number" || data.status === undefined)
  );
}

// url 쿼리스트링 변환 함수
export function toQueryString<T extends Record<string, any>>(
  params: T
): string {
  return Object.keys(params)
    .filter(
      (key) =>
        params[key] !== undefined && params[key] !== null && params[key] !== ""
    )
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
    )
    .join("&");
}
