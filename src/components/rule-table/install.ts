import DataTable from "./src/DataTable.vue";
import CardTable from "./src/CardTable.vue";
import { VueConstructor } from "vue/types/vue";

export default function (Vue: VueConstructor): void {
  Vue.component("rule-data-table", DataTable);
  Vue.component("rule-card-table", CardTable);
}
