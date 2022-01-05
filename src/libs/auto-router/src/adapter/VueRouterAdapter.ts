import { Adapter } from "./base";
import { AutoRouteConfigProperty } from "../RouteConfig";
import Directory from "@/libs/auto-router/src/directory";
import { LoopAny } from "@/types/common";
import View from "@/libs/auto-router/src/view";
import { RouteConfig } from "vue-router";
import { camelCase, upperFirst } from "lodash";

const CONTEXT_SPLIT_CHAR = ":";

const PATH_SPLIT_CHAR = "/";

export class VueRouterAdapter extends Adapter {
  convertDirectories(
    directories: Directory[],
    options: LoopAny
  ): RouteConfig[] {
    const result: RouteConfig[] = [];

    for (const index in directories) {
      if (directories[index].getPath() === options.ignore) continue;

      const directory = directories[index];

      const route = this.convertDirectory(directory, options);

      result.push(route);
    }

    if (options.notFoundPage) {
      const notFoundPageRoute = this.convertView(options.notFoundPage);

      result.push(notFoundPageRoute);
    }

    return result;
  }

  convertDirectory(directory: Directory, options: LoopAny): RouteConfig {
    const layout = this.getLayoutView(directory, options);

    const route = this.convertView(layout, true, directory.getPath());

    route.path = directory.getPath();
    route.children = route.children?.concat(
      this.convertChildrenRoutes(directory, options)
    );

    return route;
  }

  getLayoutView(directory: Directory, options: LoopAny): View {
    if (directory.existedLayoutView()) {
      return directory.getLayoutView();
    }

    if (options.defaultLayout) {
      return options.defaultLayout;
    }

    throw Error(`[${directory.Path}]: 目录下没有Layout组件.`);
  }

  convertView(view: View, ignorePath?: boolean, dir?: string): RouteConfig {
    const instance = view.Component;

    let route: any = {
      path: "",
      name: instance && instance.name,
      component: instance,
      children: [],
      componentPath: view.Path,
    };

    // 如果是默认的layout，则不设置名称
    if (dir) route.name = "";

    route.name = upperFirst(camelCase(route.name));

    if (!ignorePath) {
      route.path = view.IsIndex ? "" : view.LastInfo;
    }
    route = this.convertConfig(instance, route);

    return route;
  }

  convertConfig(instance: any, route: RouteConfig): RouteConfig {
    if (!instance[AutoRouteConfigProperty]) {
      return route;
    }
    const config = instance[AutoRouteConfigProperty];

    route.name = upperFirst(camelCase(config.name || route.name));

    if (config.alias) route.alias = config.alias;
    route.props = config.useProp;
    route.meta = config.meta;

    if (config.context.length > 0) {
      route.path = this.combinePathWithContext(route.path, config.context);

      route.alias = route.alias
        ? this.combinePathWithContext(route.alias as string, config.context)
        : route.alias;
    }

    return route;
  }

  /**
   * 获取当前目录对应下的子路由，分为两个部分
   * 1. 当前层的视图
   * 2. 子目录
   * @return {Array}
   * @private
   */
  convertChildrenRoutes(directory: Directory, options: LoopAny): RouteConfig[] {
    const routes = [];

    for (const index in directory.Views) {
      const view = directory.Views[index];

      if (view.IsLayout) continue;
      routes.push(this.convertView(view));
    }

    for (const index in directory.SubDirectories) {
      if (options.deep) {
        // 深度搜索，只要是ignore就忽略
        if (directory.SubDirectories[index].getPath() === options.ignore)
          continue;
      } else {
        // 否则，只能在第一层时，才忽略
        if (
          directory.Deep <= 1 &&
          directory.SubDirectories[index].getPath() === options.ignore
        )
          continue;
      }

      const subDirectory = directory.SubDirectories[index];

      const subRoute = this.convertDirectory(subDirectory, options);

      routes.push(subRoute);
    }
    return routes;
  }

  combinePathWithContext(path: string, context: any): string {
    let result = path;
    context = context
      .map((x: string) => `${CONTEXT_SPLIT_CHAR}${x}`)
      .join(PATH_SPLIT_CHAR);

    if (path.slice(-1) !== PATH_SPLIT_CHAR) {
      result = `${path}${PATH_SPLIT_CHAR}`;
    }
    result = `${result}${context}`;
    return result;
  }
}
