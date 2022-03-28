import Vue from "vue";
import { LoopAny, StaticAny } from "@/types/common";
import {
  getTag,
  isArray,
  isPlainObject,
  isPrimitive,
  isType,
} from "@uts/valid";

export const mapTag = "[object Map]";

export const setTag = "[object Set]";

export const arrayTag = "[object Array]";

export const objectTag = "[object Object]";

export const boolTag = "[object Boolean]";

export const dateTag = "[object Date]";

export const errorTag = "[object Error]";

export const numberTag = "[object Number]";

export const regexpTag = "[object RegExp]";

export const stringTag = "[object String]";

export const symbolTag = "[object Symbol]";

export const deepTarget = [mapTag, setTag, arrayTag, objectTag];

export function isEnvDep(): boolean {
  return process.env.NODE_ENV === "development";
}

export function findParentByName(root: Vue, name: string): Vue | null {
  const deep = (rootComponent: Vue) => {
    if (rootComponent.$options.name === name)
      return (component = rootComponent);

    rootComponent.$parent && deep(rootComponent.$parent);
  };

  let component: Vue | null = null;

  deep(root.$parent);

  return component;
}

export function findChildrenByName(root: Vue, name: string): Vue | null {
  const deep = (rootComponents: Vue[]) => {
    rootComponents.forEach((child) => {
      if (child.$options.name === name) return (component = child);

      child.$children && deep(child.$children);
    });
  };

  let component: Vue | null = null;

  deep(root.$children);

  return component;
}

export function toKeyValueMap(modes: Array<LoopAny>): LoopAny {
  const result: LoopAny = {};

  modes.map((mode) => {
    result[mode.key] = mode.value;
  });

  return result;
}

export function shadowClone(target: StaticAny): StaticAny {
  if (isPrimitive(target)) return target;

  if (isArray(target)) return [...target];

  if (isPlainObject(target)) return { ...target };

  const cloneTarget = deepTarget.includes(getTag(target))
    ? new target.constructor()
    : target;

  if (isType(target, "set")) {
    cloneTarget.forEach((value: StaticAny) => {
      cloneTarget.add(value);
    });
  }

  if (isType(target, "map")) {
    cloneTarget.forEach((value: StaticAny, key: StaticAny) => {
      cloneTarget.set(key, value);
    });
  }

  return cloneTarget;
}

export function deepClone(target: StaticAny, cached = new Map()): StaticAny {
  if (isPrimitive(target)) return target;

  if (cached.get(target)) return cached.get(target);

  const cloneTarget = deepTarget.includes(getTag(target))
    ? new target.constructor()
    : target;

  cached.set(target, cloneTarget);

  if (isType(target, "set")) {
    target.forEach((value: StaticAny) => {
      cloneTarget.add(deepClone(value, cached));
    });
  }

  if (isType(target, "map")) {
    target.forEach((value: StaticAny, key: StaticAny) => {
      cloneTarget.set(key, deepClone(value, cached));
    });
  }

  if (isArray(target) || isPlainObject(target)) {
    for (const key in target) {
      cloneTarget[key] = deepClone(target[key], cached);
    }
  }

  return cloneTarget;
}

export function strictEqual(first: StaticAny, second: StaticAny): boolean {
  return first === second;
}

export function loosEqual(first: StaticAny, second: StaticAny): boolean {
  if (first === second) return true;

  if (isArray(first) && isArray(second)) {
    return (
      first.length === second.length &&
      first.every((val: StaticAny, index: string) =>
        loosEqual(val, second[index])
      )
    );
  } else if (isPlainObject(first) && isPlainObject(second)) {
    return (
      Object.keys(first).length === Object.keys(second).length &&
      Object.keys(first).every((key) => loosEqual(first[key], second[key]))
    );
  } else if (isType(first, "date") && isType(second, "date")) {
    return first.getTime() === second.getTime();
  } else if (isType(first, "RegExp") && isType(second, "RegExp")) {
    return first.toString() === second.toString();
  } else {
    return false;
  }
}

export function curry(fun: (...args: StaticAny[]) => StaticAny) {
  return function curried(...args: StaticAny[]): StaticAny {
    if (args.length < fun.length) {
      // eslint-disable-next-line prefer-rest-params
      return curry(fun.bind(null, ...Array.from(arguments).slice(0)));
    }

    return fun(...args);
  };
}

export function debounce(
  fn: (...a: StaticAny[]) => StaticAny,
  delay: number
): (...a: StaticAny[]) => StaticAny {
  // 多少秒内重置
  let flash: ReturnType<typeof setTimeout>;

  return function debounced(...args: StaticAny[]) {
    clearTimeout(flash);

    flash = setTimeout(() => {
      fn(...args);
      flash && clearTimeout(flash);
    }, delay);
  };
}

export function throttle(
  fn: (...a: StaticAny[]) => StaticAny,
  delay: number
): (...a: StaticAny[]) => StaticAny {
  let startTime = new Date().getTime();

  return function throttled(...args: StaticAny[]) {
    const endTime = new Date().getTime();

    if (endTime - startTime >= delay) {
      fn(...args);
      startTime = endTime;
    }
  };
}

// export function sleep(delay: number): void {}
