import { Component } from "vue";
import { RouteConfig } from "vue-router";

declare module "ea-router" {
  export default class RouteGenerate {
    constructor(dir: __WebpackModuleApi.RequireContext);

    setDefaultLayout(layout: Component): RouteProvider;

    setNotFoundPage(layout: Component): RouteProvider;

    generate(): RouteConfig[];
  }
  // eslint-disable-next-line
  export function RouteName(name: string): any;
  // eslint-disable-next-line
  export function Context(...params: string[]): any;
  // export function EnableProp(): any;
  // eslint-disable-next-line
  export function Alias(alias: string): any;
  // eslint-disable-next-line
  export function Meta(data: any): any;
}
