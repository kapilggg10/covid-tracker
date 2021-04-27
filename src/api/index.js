import { httpClient } from "@/shared/httpClient.js";

export const fetchCovidData = async () => {
  try {
    const res = await httpClient.get("/summary");
    return res;
  } catch (error) {
    return error;
  }
};
