/**
 * Augment the typings of Vue.js
 */

import Vue from "vue";
import Notify from "../install";
import NotificationFun from "../index";

declare module "vue/types/vue" {
  interface Vue {
    $notify: NotificationFun;
  }
}

declare module "vue/types/options" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ComponentOptions<V extends Vue> {
    notify?: Notify;
  }
}
