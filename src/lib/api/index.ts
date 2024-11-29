import { api } from "@/lib/fetchService";
import { toQueryString } from "../common";
import type { PaginationResponse, Status, TPatient } from "@/types";

export interface RequestModelPatients {
  _page: number;
  _size?: number;
  statuses: Status[];
}

export interface ResponseModelPaients extends PaginationResponse {
  data: TPatient[];
}

export async function getPatients(
  params: RequestModelPatients
): Promise<ResponseModelPaients> {
  try {
    const { _page, _size = 10 } = params;
    const queryParams = toQueryString({
      _page,
      _size,
      _sort: "admission_dt",
      _order: "desc",
    });

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await api.get<ResponseModelPaients>(
      `/patients?status=SCREENED,OBSERVING&_page=1&_limit=10&_sort=admission_dt&_order=desc`
    );

    if (params.statuses) {
      const filteredData = response.data.filter((patient) =>
        params.statuses.includes(patient.status)
      );

      return {
        ...response,
        data: filteredData,
      };
    }

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
