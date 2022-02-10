import { zRiskerRequestParams } from "@/types/zRisker";

export interface taskPropertyQuery extends zRiskerRequestParams {
  keyword?: string;
}

export interface taskPropertyResponse {
  id: number;
  name: string;
  modifiable: boolean;
  identifier: string;
  type: number;
  description: string;
  isDeleted: boolean;
}

export interface taskPropertyBodyAdd {
  name: string;
  identifier: string;
  type: number;
  description?: string;
  isDeleted?: boolean;
}

export interface taskPropertyBodyUpdate extends taskPropertyBodyAdd {
  id: number;
}

export interface taskPropertyBodyDelete {
  ids: number[];
}
