import { VueConstructor } from "vue";
import ToolGrid from "./src/GridLayout.vue";
import CardTemplate from "./src/CardTemplate.vue";

export default function install(Vue: VueConstructor): void {
  Vue.component("tool-grid", ToolGrid);
  Vue.component("rule-card-template", CardTemplate);
}
