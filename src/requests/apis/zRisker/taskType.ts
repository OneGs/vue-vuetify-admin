import zRisker from "@req//services/zRisker";
import {
  taskTypeBodyAdd,
  taskTypeBodyDelete,
  taskTypeResponse,
  zRiskerRequestParams,
  zRiskerResponseItem,
} from "@req/zRisker";

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
