export interface LoopString {
  [key: string]: string | number | boolean;
}

export interface LoopAny {
  // eslint-disable-next-line
  [key: string]: any;
}

// eslint-disable-next-line
export type StaticAny = any

export interface ValidateType {
  getTag: (_: staticAny) => boolean;
  isDef: (_: staticAny) => boolean;
  isUnDef: (_: staticAny) => boolean;
  isNumber: (_: staticAny) => boolean;
  isString: (_: staticAny) => boolean;
  isBoolean: (_: staticAny) => boolean;
  isSymbol: (_: staticAny) => boolean;
  isObject: (_: staticAny) => boolean;
  isPlainObject: (_: staticAny) => boolean;
  isArray: (_: staticAny) => boolean;
  isPrimitive: (_: staticAny) => boolean;
  isFalsely: (_: staticAny) => boolean;
  isTruly: (_: staticAny) => boolean;
  isEmpty: (_: staticAny) => boolean;
}

export interface CommonTool {
  isEnvDep: () => boolean;
  shadowClone: (_: StaticAny) => StaticAny;
  deepClone: (_: StaticAny) => StaticAny;
  strictEqual: (f: StaticAny, s: StaticAny) => boolean;
  lossEqual: (f: StaticAny, s: StaticAny) => boolean;
}

declare global {
  interface Window {
    tinymce: StaticAny;
  }
}

window.tinymce = window.tinymce || {};
