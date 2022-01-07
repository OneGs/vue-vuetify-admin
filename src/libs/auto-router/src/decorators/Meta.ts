import { ensureConfigProperty } from "../utils";
import { AutoRouteConfigProperty } from "../RouteConfig";
import { LoopString } from "@/types/common";

export function Meta(meta: LoopString) {
  // eslint-disable-next-line
  return (target: any) => {
    ensureConfigProperty(target);
    target[AutoRouteConfigProperty].meta = meta;
  };
}
