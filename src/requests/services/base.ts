import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { flow } from "lodash";
import { filterResponseData, generatorAxios } from "@req/tool";

const options = {
  options: {
    baseURL: "http://134.175.16.232:3000/mock/18",

    method: "get",
  },

  interceptorsRequestSuccess: (config: AxiosRequestConfig) => {
    return config;
  },

  interceptorsRequestError: (error: AxiosError) => {
    console.log(error);
  },

  interceptorsResponseSuccess: (response: AxiosResponse) => {
    return flow([filterResponseData])(response);
  },

  interceptorsResponseError: (error: AxiosError) => {
    console.log(error);
  },
};

export default generatorAxios(options);
