import { isFetchError } from "./common";
import type { FetchError } from "@/types";

interface IFetchOptions extends RequestInit {}

async function fetchService<T>(
  url: string,
  options: IFetchOptions = {}
): Promise<T> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"; // 4000포트
  const headers = new Headers(options.headers);

  try {
    const response = await fetch(`${baseUrl}${url}`, {
      ...options,
      headers,
    });

    // HTTP 응답 에러 처리
    if (!response.ok) {
      const responseData = await response.json();

      if (isFetchError(responseData)) {
        throw responseData;
      } else {
        throw {
          type: "http",
          message: "Unexpected error format",
          status: response.status,
        } as FetchError;
      }
    }

    return await response.json(); // 성공적인 응답 처리
  } catch (error: any) {
    // 네트워크 에러 처리
    if (!error.type) {
      throw {
        type: "network",
        message: error.message || "Network error occurred",
      } as FetchError;
    }
    throw error; // HTTP 에러는 그대로 전달
  }
}

// HTTP 메서드 별 API 요청 정의
export const api = {
  get: <T>(url: string, options?: RequestInit) =>
    fetchService<T>(url, { ...options, method: "GET" }),
  post: <T>(url: string, data: any, options?: RequestInit) =>
    fetchService<T>(url, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json", ...options?.headers },
    }),
  put: <T>(url: string, data: any, options?: RequestInit) =>
    fetchService<T>(url, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json", ...options?.headers },
    }),
  delete: <T>(url: string, options?: RequestInit) =>
    fetchService<T>(url, { ...options, method: "DELETE" }),
  patch: <T>(url: string, data: any, options?: RequestInit) =>
    fetchService<T>(url, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json", ...options?.headers },
    }),
};
