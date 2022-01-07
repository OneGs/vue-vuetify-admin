import { ensureConfigProperty } from "../utils";
import { AutoRouteConfigProperty } from "../RouteConfig";

// eslint-disable-next-line
export function Context(...contextList: any) {
  // eslint-disable-next-line
  return (target: any) => {
    ensureConfigProperty(target);
    target[AutoRouteConfigProperty].context =
      target[AutoRouteConfigProperty].context.concat(contextList);
  };
}

export function EnableProp() {
  // eslint-disable-next-line
  return (target: any) => {
    ensureConfigProperty(target);
    target[AutoRouteConfigProperty].useProp = true;
  };
}
