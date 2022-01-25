import zRisker from "@req//services/zRisker";
import { zRiskerRequestParams, zRiskerResponseItem } from "@/types/zRisker";
import {
  taskTypeBodyAdd,
  taskTypeBodyDelete,
  taskTypeBodyUpdate,
  taskTypeResponse,
} from "@/types/taskType";

export function taskTypePage(
  params: zRiskerRequestParams
): Promise<zRiskerResponseItem<taskTypeResponse>> {
  return zRisker.get("TaskType/Page", {
    params,
  });
}

export function taskTypeAdd(body: taskTypeBodyAdd): Promise<boolean> {
  return zRisker.post("TaskType/Add", body);
}

export function taskTypeDelete(body: taskTypeBodyDelete): Promise<boolean> {
  return zRisker.post("TaskType/Delete", body);
}

export function taskTypeUpdate(body: taskTypeBodyUpdate): Promise<boolean> {
  return zRisker.post("TaskType/Update", body);
}

export function taskTypeDetails(params: {
  id: number;
}): Promise<taskTypeResponse> {
  return zRisker.get("TaskType/Details", { params });
}
