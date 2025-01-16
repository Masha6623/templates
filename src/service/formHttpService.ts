import { AxiosResponse } from "axios";
import { API } from "./apiService";
import { PostFormRequest, PostFormResponse } from "../types/apiTypes";

export const postForm = async (
  body: PostFormRequest
): Promise<AxiosResponse<PostFormResponse>> => {
  return (await API.post(
    `/save-form`,
    body
  )) as AxiosResponse<PostFormResponse>;
};
