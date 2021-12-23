import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import Main from "./main.vue";
import { notificationOptions, notificationVue } from "@/types/notification";

const NotificationConstructor = Vue.extend(Main);

const instances: notificationVue[] = [];

class Notification {
  id = "";

  static seed = 1;

  constructor() {
    this.id = "notification_" + Notification.seed++;
  }

  add(options?: notificationOptions): Vue {
    const _options = { ...options };

    const userOnClose = options?.onClose;

    _options.onClose = () => {
      Notification.close(this.id, userOnClose);
    };

    const instance = new NotificationConstructor({
      vuetify,
      data: _options,
    }) as notificationVue;

    instance.id = this.id;
    instance.$mount();
    instance.visible = true;
    document.getElementById("app")?.appendChild(instance.$el);

    let verticalOffset = 0;
    instances.forEach((_instance) => {
      verticalOffset += _instance.$el.clientHeight + 16;
    });
    verticalOffset += 16;
    instance.verticalOffset = verticalOffset;

    return instance;
  }

  static close(
    id: string,
    userOnClose: ((vueInstance: Vue) => void) | undefined
  ): void {
    let index = -1;
    const len = instances.length;

    const instance = instances.filter((instance, i) => {
      if (instance.id === id) {
        index = i;
        return true;
      }
      return false;
    })[0];

    if (!instance) return;

    if (typeof userOnClose === "function") {
      userOnClose(instance);
    }
    instances.splice(index, 1);

    if (len <= 1) return;
    const removedHeight = instance.$el.clientHeight;

    for (let i = index; i < len - 1; i++) {
      (instances[i].$el as HTMLElement).style["top"] =
        parseInt((instances[i].$el as HTMLElement).style["top"], 10) -
        removedHeight -
        16 +
        "px";
    }
  }
}

function NotificationRun(options?: notificationOptions): void {
  const instance = new Notification().add(options);

  if (instance) {
    instances.push(instance);
  }
}

export default NotificationRun;
