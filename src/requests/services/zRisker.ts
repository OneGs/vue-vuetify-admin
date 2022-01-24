import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  filterFromAxiosContent,
  filterFromZRiskerResponse,
  generatorAxios,
  omitInvalidParams,
} from "@req/tool";
import { flow } from "lodash";

const options = {
  options: {
    baseURL: "http://123.207.107.146:9001/",

    method: "get",
  },

  interceptorsRequestSuccess: (config: AxiosRequestConfig) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return omitInvalidParams(config, ["pageTotal"]);
  },

  interceptorsRequestError: (error: AxiosError) => {
    console.log(error);
  },

  interceptorsResponseSuccess: (response: AxiosResponse) => {
    return flow([filterFromAxiosContent, filterFromZRiskerResponse])(response);
  },

  interceptorsResponseError: (error: AxiosError) => {
    console.log(error);
  },
};

export default generatorAxios(options);
