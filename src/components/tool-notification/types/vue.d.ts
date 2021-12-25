/**
 * Augment the typings of Vue.js
 */

import Vue from "vue";
import Notify from "@/plugins";
import Notification from "../index";

declare module "vue/types/vue" {
  interface Vue {
    $notify: Notification;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    notify?: Notify;
  }
}
