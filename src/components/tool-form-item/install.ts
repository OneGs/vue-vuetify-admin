import { VueConstructor } from "vue";
import ToolFormItem from "./src/Main.vue";

export default function install(Vue: VueConstructor): void {
  Vue.component("tool-form-item", ToolFormItem);
}
