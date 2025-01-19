import { API } from "./apiService";

export const httpService = () => {
  const POST = async (url: string, body?: object) => {
    return await API.post(`${url}`, body);
  };

  const GET = async (url: string) => {
    return await API.post(`${url}`);
  };

  return { POST, GET };
};
