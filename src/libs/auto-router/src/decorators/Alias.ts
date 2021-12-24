import { ensureConfigProperty } from "../utils";
import { AutoRouteConfigProperty } from "../RouteConfig";

export function Alias(alias: string) {
  return (target: any) => {
    ensureConfigProperty(target);
    target[AutoRouteConfigProperty].alias = alias;
  };
}
