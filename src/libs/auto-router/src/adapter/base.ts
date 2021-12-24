import Directory from "@/libs/auto-router/src/directory";
import { RouteConfig } from "vue-router";
import { LoopAny } from "@/types/commone";

export class Adapter {
  convertDirectories(
    directories: Directory[],
    options: LoopAny
  ): RouteConfig[] {
    return [];
  }
}
