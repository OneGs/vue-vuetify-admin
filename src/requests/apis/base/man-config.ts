import base from "@req/services/base";
import { LoopAny } from "@/types/common";

export function getUser(): Promise<LoopAny> {
  return base.get("users", {
    meta: { mode: "inline" },
  });
}
