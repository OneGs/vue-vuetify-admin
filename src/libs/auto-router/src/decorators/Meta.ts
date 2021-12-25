import { ensureConfigProperty } from "../utils";
import { AutoRouteConfigProperty } from "../RouteConfig";
import { LoopString } from "@/types/common";

export function Meta(meta: LoopString) {
  return (target: any) => {
    ensureConfigProperty(target);
    target[AutoRouteConfigProperty].meta = meta;
  };
}
