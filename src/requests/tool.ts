import axios, { AxiosInstance, AxiosResponse } from "axios";
import store from "@/store";
import router from "@/router";
import { omit } from "lodash";
import { LoopAny } from "@/types/common";
import NotificationFun from "@cps/tool-notification";

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

// export function filterValidFromObj(
//   config: AxiosRequestConfig,
//   ...omitString: string[]
// ): void {
//   const { params } = config;
//
//   config.params = omitBy(params, (value) => {
//     return !value && typeof value !== "number";
//   });
//
//   if (omitString.length) config.params = omit(config.params, omitString);
// }
//
// /**
//  * 处理200-300的情况，200则成功，其它则作额外处理
//  * @param axiosContent
//  */
// export function filterDataFromAxiosContent(
//   axiosContent: AxiosResponse
// ): ResponseData | boolean {
//   const { status } = axiosContent;
//
//   return status === 200 ? axiosContent["data"] : false;
// }
//
// /**
//  * 解决 服务器请求 不为ok的情况，同时返回数据
//  * @param serveContent
//  * @returns {{}}
//  */
// export function filterDataFromServeContent(
//   serveContent: ResponseData
// ): boolean | DataStruct {
//   function parseArrayPaging(content: ResponseData): DataStruct {
//     const [{ changes: total }, size] = [content, content?.data?.length || 10];
//
//     return {
//       pageIndex: Math.floor(total / size),
//       pageSize: size,
//       pageTotal: total,
//       ...content,
//     };
//   }
//
//   if (!serveContent) return false;
//
//   const { ok, data } = serveContent;
//
//   if (!ok) {
//     return false;
//   }
//
//   if (Array.isArray(data)) return parseArrayPaging(serveContent);
//
//   return data;
// }

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

// function filterFormDataFormServeContentBase(serveContent, { config }) {
//   function parseFormList() {
//     const { changes: pageTotal } = serveContent;
//
//     const { pageSize, index: pageIndex } = config?.params || {};
//
//     const [objsData, data] = [
//       serveContent.data[0]?.object?.properties ||
//         serveContent.data[0]?.Object?.properties,
//       [],
//     ];
//
//     Object.keys(objsData).map((key) => {
//       data.push({
//         fieldCode: key,
//         ...objsData[key],
//       });
//     });
//
//     return {
//       origin: serveContent,
//       pageTotal,
//       pageSize,
//       pageIndex,
//       data,
//     };
//   }
//
//   if (!serveContent) return false;
//
//   const { ok, err } = serveContent;
//
//   if (!ok) {
//     selfNotifyError(err.msg);
//
//     return false;
//   }
//
//   const { mode } = config.meta || {};
//
//   if (mode === "list") return parseFormList();
//
//   if (mode === "inline") return serveContent;
//
//   return serveContent["data"] === null ? true : serveContent["data"];
// }
//
// export const filterFormDataFormServeContent = curryRight(
//   filterFormDataFormServeContentBase
// );
