import { AutoRouteConfigProperty } from "../RouteConfig";
import { ensureConfigProperty } from "../utils";
import { LoopAny } from "@/types/commone";

export function RouteName(name: string): (atr: LoopAny) => void {
  return (target: LoopAny) => {
    ensureConfigProperty(target);

    const { name: _name } = target.options || {};

    target[AutoRouteConfigProperty].name = name || _name;
  };
}
