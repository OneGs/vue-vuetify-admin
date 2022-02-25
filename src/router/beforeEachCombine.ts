import { PipeBeforeEach } from "@/router/beforeEach";
import { isEnvDep } from "@/utils/tools";
import { RawLocation, Route } from "vue-router";

const _routerHookPipes = require.context(
  "./before-each-modules",
  true,
  /\.j|ts$/
);

const _routerHookPipesKeys = _routerHookPipes
  .keys()
  .filter((key) => key.indexOf("index") === -1) // 过滤掉index本身
  .filter((key) => _routerHookPipes(key).default instanceof PipeBeforeEach)
  .filter((key) => _routerHookPipes(key).default?.disabled !== true) // 过滤掉被禁止的管道
  .sort((firstKey, secondKey) => {
    const [firstOrder = 0, secondOrder = 0] = [
      _routerHookPipes(firstKey).default?.order,
      _routerHookPipes(secondKey).default?.order,
    ];

    return secondOrder - firstOrder;
  }); // 执行排序

isEnvDep() &&
  console.log(
    `beforeEach拦截器执行顺序：${_routerHookPipesKeys
      .join(", ")
      .replace(/\.\/|\.js/g, "")}`
  );

/**
 * 路由管道运行规则
 * 如果返回值为true 或 一个路由对象，则停止管道运算
 *  true：直接运行next()
 *  router: 进行跳转next(router)
 * 如果返回其它值，则继续执行管道操作
 * 最终还没有找到_next，则报错警告
 * @param to
 * @param form
 * @param next
 * @return {void|*}
 */
export default async function beforeEachCombine(
  to: Route,
  form: Route,
  next: (to?: RawLocation | false | void) => void
): Promise<boolean | Route | void> {
  let _next = null;

  for (let i = 0; i < _routerHookPipesKeys.length; i++) {
    _next = await _routerHookPipes(_routerHookPipesKeys[i]).default?.beforeEach(
      to,
      form,
      next
    );

    if (_next === true || typeof _next === "object") break;
  }

  if (!_next) return console.warn(`_next is ${_next}`);

  _next === true ? next() : next(_next);
}
