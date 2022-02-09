import zRisker from "@req/services/zRisker";
import { zRiskerRequestParams, zRiskerResponseItem } from "@/types/zRisker";
import {
  taskPropertyBodyAdd,
  taskPropertyBodyDelete,
  taskPropertyBodyUpdate,
  taskPropertyResponse,
} from "@/types/taskProperty";

export function taskPropertyPage(
  params: zRiskerRequestParams
): Promise<zRiskerResponseItem<taskPropertyResponse>> {
  return zRisker.get("TaskProperty/Page", {
    params,
  });
}

export function taskPropertyAdd(body: taskPropertyBodyAdd): Promise<boolean> {
  return zRisker.post("TaskProperty/Add", body);
}

export function taskPropertyDelete(
  body: taskPropertyBodyDelete
): Promise<boolean> {
  return zRisker.post("TaskProperty/Delete", body);
}

export function taskPropertyUpdate(
  body: taskPropertyBodyUpdate
): Promise<boolean> {
  return zRisker.post("TaskProperty/Update", body);
}

export function taskPropertyDetails(params: {
  id: number;
}): Promise<taskPropertyResponse> {
  return zRisker.get("TaskProperty/Details", { params });
}
