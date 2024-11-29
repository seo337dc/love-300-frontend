import { api } from "@/lib/fetchService";
import type { TPatient } from "@/types";

export async function getPatients(): Promise<TPatient[]> {
  try {
    const patients = await api.get<TPatient[]>("/patients");
    console.log("Patients:", patients);
    return patients; // TPatient[] 타입으로 반환
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
