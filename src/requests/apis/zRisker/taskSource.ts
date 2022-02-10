import zRisker from "@req/services/zRisker";
import { zRiskerRequestParams, zRiskerResponseItem } from "@/types/zRisker";
import {
  taskSourceBodyAdd,
  taskSourceBodyDelete,
  taskSourceBodyUpdate,
  taskSourceResponse,
} from "@/types/taskSource";

export function taskSourcePage(
  params: zRiskerRequestParams
): Promise<zRiskerResponseItem<taskSourceResponse>> {
  return zRisker.get("PropertyData/Page", {
    params,
  });
}

export function taskSourceAdd(body: taskSourceBodyAdd): Promise<boolean> {
  return zRisker.post("PropertyData/Add", body);
}

export function taskSourceDelete(body: taskSourceBodyDelete): Promise<boolean> {
  return zRisker.post("PropertyData/Delete", body);
}

export function taskSourceUpdate(body: taskSourceBodyUpdate): Promise<boolean> {
  return zRisker.post("PropertyData/Update", body);
}

export function taskSourceDetails(params: {
  id: number;
}): Promise<taskSourceResponse> {
  return zRisker.get("PropertyData/Details", { params });
}
