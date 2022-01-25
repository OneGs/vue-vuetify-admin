import { zRiskerRequestParams } from "@/types/zRisker";

export interface taskStateQuery extends zRiskerRequestParams {
  keyword?: string;
}

export interface taskStateResponse {
  id: number;
  name: string;
  icon: string;
  type: number;
  description: string;
  isDeleted: boolean;
}

export interface taskStateBodyAdd {
  name: string;
  icon: string;
  type: number;
  description?: string;
  isDeleted?: boolean;
}

export interface taskStateBodyUpdate extends taskStateBodyAdd {
  id: number;
}

export interface taskStateBodyDelete {
  ids: number[];
}
