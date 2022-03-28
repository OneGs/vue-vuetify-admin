import { StaticAny } from "@/types/common";

const toString = Object.prototype.toString;

export function getTag(target: StaticAny): string {
  return toString.call(target);
}

export function isDef(target: StaticAny): boolean {
  return target !== null && target !== undefined;
}

export function isUnDef(target: StaticAny): boolean {
  return target === null || target === undefined;
}

export function isType(target: StaticAny, type: string): boolean {
  return (
    !!target &&
    (typeof target === type ||
      getTag(target) ===
        `[object ${type.charAt(0).toUpperCase() + type.slice(1)}]`)
  );
}

export function isNumber(target: StaticAny): boolean {
  return isType(target, "number");
}

export function isString(target: StaticAny): boolean {
  return isType(target, "string");
}

export function isBoolean(target: StaticAny): boolean {
  return isType(target, "boolean");
}

export function isSymbol(target: StaticAny): boolean {
  return isType(target, "symbol");
}

export function isObject(target: StaticAny): boolean {
  return isType(target, "object");
}

export function isArray(target: StaticAny): boolean {
  return Array.isArray(target) || isType(target, "array");
}

export function isPlainObject(target: StaticAny): boolean {
  return target && toString.call(target) === "[object Object]";
}

export function isPrimitive(target: StaticAny): boolean {
  if (target !== undefined && target === null) return true;

  return !isObject(target);
}

export function isFalsely(target: StaticAny): boolean {
  return !target;
}

export function isTruly(target: StaticAny): boolean {
  return !isFalsely(target);
}

export function isEmpty(target: StaticAny): boolean {
  if (isFalsely(target)) return true;

  if (isArray(target)) return isEmpty(target.length);

  if (isPlainObject(target)) return isEmpty(Object.keys(target));

  return false;
}
