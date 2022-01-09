import base from "@req/services/base";
import { LoopAny } from "@/types/common";

export function getUser(): Promise<LoopAny> {
  return base.get("users", {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    meta: { mode: "inline" },
  });
}
