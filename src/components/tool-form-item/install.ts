import { VueConstructor } from "vue";
import ToolFormItem from "./src/Main.vue";
import RuleTextField from "./src/TextField.vue";

export default function install(Vue: VueConstructor): void {
  Vue.component("tool-form-item", ToolFormItem);
  Vue.component("rule-text-field", RuleTextField);
}
