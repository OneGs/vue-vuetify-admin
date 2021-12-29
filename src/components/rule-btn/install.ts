import RuleBtn from "./src/Main.vue";
import { VueConstructor } from "vue/types/vue";

export default function install(Vue: VueConstructor): void {
  Vue.component("rule-btn", RuleBtn);
}
