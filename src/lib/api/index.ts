import { api } from "@/lib/fetchService";
import { toQueryString } from "../common";
import type { PaginationResponse, Status, TPatient } from "@/types";

export interface RequestModelPatients {
  _page: number;
  _limit?: number;
  statuses: Status[];
}

export interface ResponseModelPaients extends PaginationResponse {
  data: TPatient[];
}

export interface ResponseModelAll {
  totalCtn: number;
  screenedCtn: number;
  obeservingCtn: number;
  errorCtn: number;
  doneCtn: number;
  dnrCtn: number;
}

export async function getPatients(
  params: RequestModelPatients
): Promise<ResponseModelPaients> {
  try {
    const { _page, _limit = 10, statuses } = params;
    const queryParams = toQueryString({
      _page,
      _limit,
      _sort: "emr_id",
      _order: "desc",
      status: statuses.join(","),
    });

    await new Promise((resolve) => setTimeout(resolve, 1500));

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

export async function getPatientsAll(): Promise<ResponseModelAll | null> {
  try {
    const response = await api.get<ResponseModelPaients>(`/patients-all`);

    if (response.data) {
      const result: ResponseModelAll = {
        totalCtn: response.data.length,
        screenedCtn: response.data.filter((data) => data.status === "SCREENED")
          .length,
        obeservingCtn: response.data.filter(
          (data) => data.status === "OBSERVING"
        ).length,
        errorCtn: response.data.filter((data) => data.status === "ERROR")
          .length,
        doneCtn: response.data.filter((data) => data.status === "DONE").length,
        dnrCtn: response.data.filter((data) => data.status === "DNR").length,
      };

      return result;
    }

    return null;
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
