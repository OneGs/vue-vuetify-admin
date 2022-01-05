import NotificationFun from "./index";
import Notification from "./src/Notification.vue";
import { VueConstructor } from "vue";

let vue: VueConstructor;

export default class Notify {
  $options: NotificationOptions = {};

  static install: (_vue: VueConstructor) => void;

  constructor(options?: NotificationOptions) {
    if (!options) return;

    this.$options = options;
  }
}

Notify.install = function (Vue: VueConstructor): void {
  vue = Vue;

  Vue.component("rule-notification", Notification);

  vue.mixin({
    beforeCreate() {
      const { notify } = this.$options;

      if (!notify) return;

      vue.prototype.$notify = NotificationFun;
    },
  });
};
