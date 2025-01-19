import { AxiosResponse } from "axios";
import { PostFormRequest, PostFormResponse } from "../types/apiTypes";
import { httpService } from "./httpService";

export const formHttp = () => {
  const http = httpService();

  const postForm = async (
    body: PostFormRequest
  ): Promise<AxiosResponse<PostFormResponse>> => {
    return (await http.POST(
      `/save-form`,
      body
    )) as AxiosResponse<PostFormResponse>;
  };

  const getForms = async (): Promise<AxiosResponse<unknown>> => {
    return (await http.GET(`/forms`)) as AxiosResponse<unknown>;
  };

  return { postForm, getForms };
};
