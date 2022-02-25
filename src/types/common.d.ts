export interface LoopString {
  [key: string]: string | number | boolean;
}

export interface LoopAny {
  // eslint-disable-next-line
  [key: string]: any;
}

// eslint-disable-next-line
export type StaticAny = any

declare global {
  interface Window {
    tinymce: StaticAny;
  }
}

window.tinymce = window.tinymce || {};
