import { Component, Vue, Prop, VModel, Inject } from "vue-property-decorator";
import ToolFormItem from "@cps/tool-form-item/index.vue";
import ToolForm from "@cps/tool-form/index.vue";

@Component({
  name: "Input",

  inheritAttrs: false,
})
export default class Input extends Vue {
  @VModel({ type: [String, Array, Boolean, Number], default: null })
  modeValue!: string | boolean | number | Array<string | boolean | number>;

  @Prop({ type: String, default: "" }) label!: string;

  @Prop({ type: String, default: "" }) placeholder!: string;

  @Prop({ type: Boolean, default: false }) small!: boolean;

  @Prop({ type: Boolean, default: false }) large!: boolean;

  @Prop({ type: Boolean, default: false }) hideDetails!: boolean;

  @Prop({ type: String, default: "" }) rules!: string;

  @Inject({ default: {} }) formItem!: ToolFormItem;

  @Inject({ default: {} }) rootForm!: ToolForm;

  get height(): number {
    return this.large ? 61 : this.small ? 34 : 46;
  }

  get _label(): string {
    return this.placeholder || this.label || this.formItem.label;
  }

  get inlineHideDetails(): boolean {
    return (
      !!this.$attrs["hide-details"] ||
      this.rootForm.hideDetails ||
      this.hideDetails ||
      false
    );
  }
}
