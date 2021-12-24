/**
 * 目录类
 */
import View from "@/libs/auto-router/src/view";

class Directory {
  /**
   * 目录路径
   * @private
   */
  _path: string;

  /**
   * 当前目录下所有视图
   * @type {Array}
   * @private
   */
  _views: View[] = [];

  /**
   * 子目录
   * @type {Array}
   * @private
   */
  _subDirectory: Directory[] = [];

  constructor(path: string) {
    this._path = path;
  }

  get Views(): View[] {
    return this._views;
  }

  get SubDirectories(): Directory[] {
    return this._subDirectory;
  }

  /**
   * 文件路径分隔后的数组
   * @return {never|string[]}
   * @constructor
   */
  get PathInfos(): string[] {
    return this._path.split("/");
  }

  get Path(): string {
    return this._path;
  }

  addView(view: View): void {
    if (this.isCurrentDirectoryView(view)) {
      this._views.push(view);
    } else if (this._isInSubDirectory(view)) {
      this._addInSubDirectory(view);
    } else {
      const newSubDirectory = this._createSubDirectory(view);

      newSubDirectory.addView(view);
      this._subDirectory.push(newSubDirectory);
    }
  }

  isCurrentDirectoryView(view: View): boolean {
    const tailPathInfos = view.Path.replace(`${this._path}`, "")
      .replace(/^\//, "")
      .split("/");

    return (
      this._isStartWith(view.Path, this._path) && tailPathInfos.length === 1
    );
  }

  /**
   * 是否是在当前目录下
   * @param view
   */
  containView(view: View): boolean {
    return this._isStartWith(view.Path, this._path);
  }

  /**
   * 判断target 是否是以 source开头的.
   * @param target
   * @param source
   * @return {boolean}
   * @private
   */
  _isStartWith(target: string, source: string): boolean {
    const reg = new RegExp(`^${source}`);

    return reg.test(target);
  }

  /**
   * 是否是在子目录下
   * @param view
   * @return {boolean}
   * @private
   */
  _isInSubDirectory(view: View): boolean {
    for (const index in this._subDirectory) {
      const directory = this._subDirectory[index];

      if (directory.containView(view)) return true;
    }
    return false;
  }

  /**
   * 添加到子目录下
   * @param view
   * @private
   */
  _addInSubDirectory(view: View): void {
    const directory = this._getSubDirectory(view);

    directory && directory.addView(view);
  }

  /**
   * 获取视图所在的目录
   * @param view
   * @return {null|*}
   * @private
   */
  _getSubDirectory(view: View): Directory | null {
    for (const index in this._subDirectory) {
      const directory = this._subDirectory[index];

      if (directory.containView(view)) return directory;
    }
    return null;
  }

  /**
   * 新建一个子目录
   * @param view
   * @private
   */
  _createSubDirectory(view: View): Directory {
    const path = view.Path.replace(`${this._path}`, "")
      .replace(/^\//, "")
      .split("/")[0];

    return new Directory(`${this._path}/${path}`);
  }

  /**
   * 获取layout视图
   * @return {View}
   * @private
   */
  getLayoutView(): View {
    for (const index in this._views) {
      const view = this._views[index];

      if (view.IsLayout) return view;
    }

    throw Error(`${this._path} 目录下没有Layout组件.`);
  }

  existedLayoutView(): boolean {
    return this._views.some((view) => view.IsLayout);
  }

  /**
   * 获取当前目录对应的路由路径
   * @return {string}
   * @private
   */
  getPath(): string {
    if (this._path === ".") return "/";
    return this.PathInfos[this.PathInfos.length - 1];
  }
}

export default Directory;
