import { zRiskerRequestParams } from "@/types/zRisker";

export interface taskSourceQuery extends zRiskerRequestParams {
  keyword?: string;
}

export interface taskSourceResponse {
  id: number;
  createdTime: string;
  createdUserId: number;
  createdUserName: string;
  updatedTime: string;
  updatedUserId: number;
  updatedUserName: string;
  text: string;
  value: string;
}

export interface taskSourceBodyAdd {
  createdTime: string;
  createdUserId: number;
  createdUserName: string;
  updatedTime: string;
  updatedUserId: number;
  updatedUserName: string;
  text: string;
  value: string;
}

export interface taskSourceBodyUpdate extends taskSourceBodyAdd {
  id: number;
}

export interface taskSourceBodyDelete {
  ids: number[];
}
