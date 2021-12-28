import { VueConstructor } from "vue";
import ToolFormItem from "./src/Main.vue";
import RuleTextField from "./src/TextField.vue";
import RuleSelect from "./src/Select.vue";
import RuleCheckbox from "./src/Checkbox.vue";
import RuleSwitch from "./src/Switch.vue";
import RuleTextarea from "./src/Textarea.vue";
import RuleFile from "./src/File.vue";

// 还有很多复杂的情况
// 级联选择器
// 选择器的自动填充
// 文本域、文件上传
// 富文本
// 时间选择器

export default function install(Vue: VueConstructor): void {
  Vue.component("tool-form-item", ToolFormItem);
  Vue.component("rule-text-field", RuleTextField);
  Vue.component("rule-select", RuleSelect);
  Vue.component("rule-checkbox", RuleCheckbox);
  Vue.component("rule-switch", RuleSwitch);
  Vue.component("rule-textarea", RuleTextarea);
  Vue.component("rule-file", RuleFile);
}
