import { ensureConfigProperty } from "../utils";
import { AutoRouteConfigProperty } from "../RouteConfig";

export function Alias(alias: string) {
  // eslint-disable-next-line
  return (target: any): void => {
    ensureConfigProperty(target);
    target[AutoRouteConfigProperty].alias = alias;
  };
}
