import { AutoRouteConfigProperty, RouteConfig } from "./RouteConfig";

// eslint-disable-next-line
export function ensureConfigProperty(target: any): void {
  if (!target[AutoRouteConfigProperty]) {
    Object.defineProperty(target, AutoRouteConfigProperty, {
      value: new RouteConfig(),
      writable: true,
    });
  }
}
