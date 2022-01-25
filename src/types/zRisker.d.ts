import { AxiosResponse } from "axios";

export interface zRiskerRequestSort {
  propertyName?: string;
  sortDirection?: number;
}

export interface zRiskerRequestParams {
  pageNumber?: number;
  pageSize?: number;
  sorter?: zRiskerRequestSort;
}

export interface zRiskerResponse<T> {
  success: boolean;
  code: number;
  message: string;
  data: zRiskerResponseItem<T>;
  _origin_: Pick<
    AxiosResponse<T>,
    "status" | "statusText" | "headers" | "config" | "request"
  >;
}

export interface zRiskerResponseItem<T> {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  items: Array<T>;
  hasPrevPages: boolean;
  hasNextPages: boolean;
}
