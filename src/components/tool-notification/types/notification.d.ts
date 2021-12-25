import Vue from "vue";

export interface notificationOptions {
  visible?: boolean;
  title?: string;
  message?: string;
  duration?: number;
  type?: string;
  showClose?: boolean;
  customClass?: string;
  iconClass?: string;
  verticalOffset?: number;
  timer?: number;
  onClose?: (() => void) | undefined;
  onClick?: (() => void) | undefined;
  closed?: boolean;
}

export interface notificationVue extends Vue, notificationOptions {
  id?: string;
}
