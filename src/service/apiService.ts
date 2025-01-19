import axios, { AxiosInstance } from "axios";

type ApiService = AxiosInstance;

export const API: ApiService = axios.create({
  baseURL: "http://localhost:4000",
});
