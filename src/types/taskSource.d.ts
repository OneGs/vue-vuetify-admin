import { zRiskerRequestParams } from "@/types/zRisker";

export interface taskSourceQuery extends zRiskerRequestParams {
  keyword?: string;
}

export interface taskSourceResponse {
  id: number;
  name: string;
  description: string;
}

export interface taskSourceBodyAdd {
  name: string;
  description?: string;
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
