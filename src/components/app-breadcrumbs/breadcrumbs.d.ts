import { RouteConfig } from "vue-router";

export interface BreadItems {
  disabled?: boolean;
  exact?: boolean;
  href?: string;
  link?: boolean;
  text: string | number;
  to?: string | RouteConfig;
}
