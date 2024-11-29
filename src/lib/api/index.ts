import { api } from "@/lib/fetchService";
import { toQueryString } from "../common";
import type { PaginationResponse, TPatient } from "@/types";

export interface RequestModelPatients {
  _page: number;
  _size?: number;
}

export interface ResponseModelPaients extends PaginationResponse {
  data: TPatient[];
}

export async function getPatients(
  params: RequestModelPatients
): Promise<ResponseModelPaients> {
  try {
    const { _page, _size = 10 } = params;
    const queryParams = toQueryString({ _page, _size });

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await api.get<ResponseModelPaients>(
      `/patients?${queryParams}`
    );

    return response;
  } catch (error: any) {
    if (error.type === "http") {
      console.error(`HTTP Error: ${error.status} - ${error.message}`);
    } else if (error.type === "network") {
      console.error(`Network Error: ${error.message}`);
    } else {
      console.error("Unknown Error:", error);
    }
    throw error;
  }
}
