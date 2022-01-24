import base from "@req/services/base";
import { LoopAny } from "@/types/common";

export function getTaskType(params: LoopAny): Promise<LoopAny> {
  return base.get("tasktype", {
    params,
    meta: { mode: "inline" },
  });
}

export function getStatus(params: LoopAny): Promise<LoopAny> {
  return base.get("status", {
    params,
    meta: { mode: "inline" },
  });
}
