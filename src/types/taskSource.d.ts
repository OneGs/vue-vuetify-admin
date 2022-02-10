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

// ————————————————————————————————————
//* ——— PropertyData - ItemList
// ————————————————————————————————————
export interface taskSourceItemQuery {
  propertyId: number;
}

export interface taskSourceItemResponse {
  id: number;
  text: string;
  value: string;
  icon: string;
}

export interface taskSourceItemBodyAdd {
  propertyId: number;
  text: string;
  value: string;
  icon?: string;
}

export interface taskSourceItemBodyUpdate extends taskSourceItemBodyAdd {
  propertyId: number;
}

export interface taskSourceItemBodyDelete {
  propertyId: number;
  ids: number[];
}
