import { zRiskerRequestParams } from "@/types/zRisker";

export interface taskTypeQuery extends zRiskerRequestParams {
  keyword?: string;
}

export interface taskTypeResponse {
  id: number;
  name: string;
  icon: string;
  description: string;
  isDeleted: boolean;
}

export interface taskTypeBodyAdd {
  name: string;
  icon?: string;
  description?: string;
  isDeleted?: boolean;
}

export interface taskTypeBodyUpdate extends taskTypeBodyAdd {
  id: number;
}

export interface taskTypeBodyDelete {
  ids: number[];
}
