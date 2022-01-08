import { Component, Vue, Prop, VModel } from "vue-property-decorator";
import TheForm from "../index.vue";

@Component({
  name: "Input",

  inheritAttrs: false,
})
export default class Input extends Vue {
  @VModel({ type: [String, Array] }) modeValue!: string | Array<string>;

  @Prop({ type: String, default: "" }) label!: string;

  @Prop({ type: Boolean, default: false }) small!: boolean;

  @Prop({ type: Boolean, default: false }) large!: boolean;

  @Prop({ type: Boolean, default: false }) hideLabel!: boolean;

  @Prop({ type: Boolean, default: true }) hideDetails!: boolean;

  get height(): number {
    return this.large ? 61 : this.small ? 34 : 46;
  }

  get _label(): string {
    if (this.hideLabel) return "";

    return this.label || (this.$parent.$options.propsData as TheForm).label;
  }
}
