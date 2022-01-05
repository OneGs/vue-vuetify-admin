import { VueConstructor } from "vue/types/vue";
import ToolIconSvg from "@/components/tool-icon-svg/index.vue";

export default function install(Vue: VueConstructor): void {
  Vue.component("tool-icon-svg", ToolIconSvg);
}
