import { AxiosRequestConfig } from "axios";
import { API } from "./apiService";

export const postRequest = async (
  url: string,
  data?: object,
  config?: AxiosRequestConfig
) => {
  return await API.post(`${url}`, data, config);
};
