import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import store from "@/store";
import router from "@/router";
import { omit, omitBy } from "lodash";
import { LoopAny } from "@/types/common";
import NotificationFun from "@cps/tool-notification";
import { zRiskerResponse, zRiskerResponseItem } from "@/types/zRisker";

// interface ResponseData {
//   ok: boolean;
//   data: Array<LoopAny | string>;
//   changes: number;
// }
//
export interface DataStruct extends LoopAny {
  pageIndex?: number;
  pageSize?: number;
  pageTotal?: number;
}

export function generatorAxios(_options: LoopAny): AxiosInstance {
  const request = axios.create(_options.options);

  request.interceptors.request.use(
    _options["interceptorsRequestSuccess"],
    _options["interceptorsRequestError"]
  );

  request.interceptors.response.use(
    _options["interceptorsResponseSuccess"],
    _options["interceptorsResponseError"]
  );

  return request;
}

export function omitInvalidParams(
  config: AxiosRequestConfig,
  ...omitString: string[]
): AxiosRequestConfig {
  const { params } = config;

  config.params = omitBy(params, (value) => {
    return !value && typeof value !== "number";
  });

  if (omitString.length) config.params = omit(config.params, omitString);

  return config;
}

/**
 * 处理200-300的情况，200则成功，其它则作额外处理
 * @param axiosContent
 */
export function filterFromAxiosContent(
  axiosContent: AxiosResponse
): zRiskerResponse<LoopAny> {
  const result: LoopAny = {};

  Object.keys(axiosContent.data).forEach((key: string) => {
    result[key.toLocaleLowerCase()] = axiosContent.data[key];
  });

  return {
    _origin_: omit(axiosContent, ["data"]),
    ...result,
  } as zRiskerResponse<LoopAny>;
}

export function filterFromZRiskerResponse(
  zRiskerResponse: zRiskerResponse<LoopAny>
): boolean | zRiskerResponseItem<LoopAny> {
  if (!zRiskerResponse.success) return false;

  if (zRiskerResponse.success && zRiskerResponse.data === null) return true;

  return zRiskerResponse.data as zRiskerResponseItem<LoopAny>;
}

/**
 * 统一的拦截处理
 * @param response
 * @returns {Pick<object, Exclude<object, [string[]][number]>>|boolean|*}
 */
export function filterResponseData(
  response: AxiosResponse
): boolean | LoopAny | Array<LoopAny> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { mode } = response.config?.meta || {};

  if (mode === "all" || !response.data) return response;

  const { data } = response;

  // 传入参数存在错误，即后台处理不成功时反馈
  if (!data.ok) {
    if (["99003", "99004"].includes(data.err.code)) {
      // 判断是
      store.commit("permission/CLEAR");

      store.commit("user/CLEAR");

      router.push({ name: "Login" }).then();
    }

    router.currentRoute.name !== "Login" &&
      NotificationFun({
        message: data.err.msg,
      });

    return false;
  }

  // 请求成功后
  if (data?.data[0] === false) {
    NotificationFun({
      message: "操作失败",
    });

    return false;
  }

  if (data?.data[0] === true) return true; // （后台处理成功，返回true）

  // 拦截data的标识符
  if (mode === "inline") {
    return omit(data, ["ok", "err"]);
  }

  // 请求始终需要数组
  if (mode === "array") {
    return data.data;
  }

  return data.data.length === 1 ? data.data[0] || {} : data.data; // 默认返回第一个data数，以后可能会变
}
