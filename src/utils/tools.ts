import Vue from "vue";
import { LoopAny, StaticAny } from "@/types/common";
import {
  getTag,
  isArray,
  isObject,
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
