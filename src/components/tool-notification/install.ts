import Notification from "./index";
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

Notify.install = function (_vue: VueConstructor): void {
  vue = _vue;

  vue.mixin({
    beforeCreate() {
      const { notify } = this.$options;

      if (!notify) return;

      vue.prototype.$notify = Notification;
    },
  });
};
