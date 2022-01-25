import zRisker from "@req//services/zRisker";
import { zRiskerRequestParams, zRiskerResponseItem } from "@/types/zRisker";
import {
  taskStateBodyAdd,
  taskStateBodyDelete,
  taskStateBodyUpdate,
  taskStateResponse,
} from "@/types/taskState";

export function taskStatePage(
  params: zRiskerRequestParams
): Promise<zRiskerResponseItem<taskStateResponse>> {
  return zRisker.get("taskState/Page", {
    params,
  });
}

export function taskStateAdd(body: taskStateBodyAdd): Promise<boolean> {
  return zRisker.post("TaskState/Add", body);
}

export function taskStateDelete(body: taskStateBodyDelete): Promise<boolean> {
  return zRisker.post("TaskState/Delete", body);
}

export function taskStateUpdate(body: taskStateBodyUpdate): Promise<boolean> {
  return zRisker.post("TaskState/Update", body);
}

export function taskStateDetails(params: {
  id: number;
}): Promise<taskStateResponse> {
  return zRisker.get("TaskState/Details", { params });
}
