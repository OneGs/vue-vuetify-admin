import View from "./view";
import Directory from "./directory";
import { VueRouterAdapter } from "./adapter/VueRouterAdapter";
import { Component } from "vue";
import view from "./view";
import { RouteConfig } from "vue-router";

const [EMPTY_ROUTE_PATH, ALL_ROUTE_PATH] = ["", "*"];

class RouteProvider {
  /**
   * 自动生成路由的目录
   * @type {Array}
   * @private
   */
  _dir;

  /**
   * 视图数组
   * @type {RouteProvider}
   * @private
   */
  _views: View[] = [];

  /**
   * 路由对象数组
   * @type {Array}
   * @private
   */
  _routes = [];

  /**
   * 根目录对象
   * @private
   */
  _directory;

  _defaultLayout: View | undefined;

  _notFoundPage: view | undefined;

  _ignore = "";

  _deep: boolean | undefined = true;

  constructor(dir: __WebpackModuleApi.RequireContext) {
    this._dir = dir;
    this._views = this._getViews(this._dir);
    this._directory = new Directory(".");
    this._generateDirectory();
  }

  setDefaultLayout(component: Component): RouteProvider {
    this._defaultLayout = View.create(EMPTY_ROUTE_PATH, component);

    return this;
  }

  setNotFoundPage(component: Component): RouteProvider {
    this._notFoundPage = View.create(ALL_ROUTE_PATH, component);

    return this;
  }

  ignoreDir(ignore: string, deep?: boolean): RouteProvider {
    this._ignore = ignore;
    deep !== undefined && (this._deep = deep);

    return this;
  }

  /**
   * 根据目录生成路由对象的数组，供vue-router使用（routes选项）
   * @return {Array}
   */
  generate(): RouteConfig[] {
    const adapter = new VueRouterAdapter();

    const config = {
      defaultLayout: this._defaultLayout,
      notFoundPage: this._notFoundPage,
      ignore: this._ignore,
      deep: this._deep,
    };

    console.log(this._directory, "dir");

    return adapter.convertDirectories([this._directory], config);
  }

  /**
   * 解析目录，还原目录结构
   * @param dir
   * @return {this}
   * @private
   */
  _getViews(dir: __WebpackModuleApi.RequireContext): View[] {
    let views = [];

    const keys = dir.keys();

    for (const index in keys) {
      const path = keys[index];

      const component = dir(path);

      views.push(View.create(path, component.default || component));
    }

    views = views.sort((x, y) => {
      return x.Deep > y.Deep ? 1 : -1;
    });

    return views;
  }

  /**
   * 解析views,生成对应的目录结构
   * @private
   */
  _generateDirectory(): void {
    for (const index in this._views) {
      const view = this._views[index];

      this._directory.addView(view);
    }
  }
}

export default RouteProvider;
