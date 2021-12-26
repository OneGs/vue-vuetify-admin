import { VueConstructor } from "vue";
import RuleTitleH1 from "./src/H1.vue";
import RuleTitleH2 from "./src/H2.vue";
import RuleTitleH3 from "./src/H3.vue";

export default function install(Vue: VueConstructor): void {
  Vue.component("rule-h1", RuleTitleH1);
  Vue.component("rule-h2", RuleTitleH2);
  Vue.component("rule-h3", RuleTitleH3);
}
