import { Component, Vue, Prop } from "vue-property-decorator";
import TheForm from "../index.vue";

@Component({
  name: "Input",

  inheritAttrs: false,
})
export default class Input extends Vue {
  @Prop({ type: Boolean, default: false }) hiddenLabel?: boolean;

  @Prop({ type: String, default: "" }) label?: string;

  get _label(): string | undefined {
    if (this.hiddenLabel) return "";

    return this.label || (this.$parent.$options.propsData as TheForm).label;
  }
}
