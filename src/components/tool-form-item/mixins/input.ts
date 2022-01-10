import { Component, Vue, Prop, VModel, Inject } from "vue-property-decorator";
import ToolFormItem from "@cps/tool-form-item/index.vue";
import ToolForm from "@cps/tool-form/index.vue";

@Component({
  name: "Input",

  inheritAttrs: false,
})
export default class Input extends Vue {
  @VModel({ type: [String, Array] }) modeValue!: string | Array<string>;

  @Prop({ type: String, default: "" }) label!: string;

  @Prop({ type: Boolean, default: false }) small!: boolean;

  @Prop({ type: Boolean, default: false }) large!: boolean;

  @Prop({ type: Boolean, default: true }) hideDetails!: boolean;

  @Inject({ default: {} }) formItem!: ToolFormItem;

  @Inject({ default: {} }) form!: ToolForm;

  get height(): number {
    return this.large ? 61 : this.small ? 34 : 46;
  }

  get _label(): string {
    return this.label || this.formItem.label;
  }
}
