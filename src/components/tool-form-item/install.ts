import { VueConstructor } from "vue";
import ToolFormItem from "./src/Main.vue";
import RuleTextField from "./src/TextField.vue";
import RuleSelect from "./src/Select.vue";
import RuleCheckbox from "./src/Checkbox.vue";

export default function install(Vue: VueConstructor): void {
  Vue.component("tool-form-item", ToolFormItem);
  Vue.component("rule-text-field", RuleTextField);
  Vue.component("rule-select", RuleSelect);
  Vue.component("rule-checkbox", RuleCheckbox);
}
