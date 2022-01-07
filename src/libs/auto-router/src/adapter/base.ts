import Directory from "@/libs/auto-router/src/directory";
import { RouteConfig } from "vue-router";
import { LoopAny } from "@/types/common";

export class Adapter {
  // eslint-disable-next-line
  convertDirectories(directories: Directory[], options: LoopAny): RouteConfig[] {
    return [];
  }
}
