import { Component, Vue } from "vue-property-decorator";
import TheForm from "../Main.vue";

@Component({
  name: "Input",
})
export default class Input extends Vue {
  get label(): string | undefined {
    return (this.$parent.$options.propsData as TheForm).label;
  }
}
