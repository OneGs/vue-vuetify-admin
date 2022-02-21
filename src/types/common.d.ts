import Tinymce from "@cps/tool-tinymce/index.vue";

export interface LoopString {
  [key: string]: string | number | boolean;
}

export interface LoopAny {
  // eslint-disable-next-line
  [key: string]: any;
}

// eslint-disable-next-line
export type staticAny = any

declare global {
  interface Window {
    tinymce: Tinymce;
  }
}

window.tinymce = window.tinymce || {};
