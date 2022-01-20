<template>
  <validation-observer ref="autoRender">
    <tool-form>
      <tool-form-item :label="mode.label">
        <component
          :is="mode.componentName"
          v-bind="getFormField(mode)"
          v-model="returnValue"
        />
      </tool-form-item>
    </tool-form>
  </validation-observer>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref, VModel } from "vue-property-decorator";
import RuleCheckbox from "@cps/tool-form-item/Checkbox.vue";
import RuleDatePicker from "@cps/tool-form-item/DatePicker.vue";
import RuleFile from "@cps/tool-form-item/File.vue";
import RuleRadio from "@cps/tool-form-item/Radio.vue";
import RuleSelect from "@cps/tool-form-item/Select.vue";
import RuleSwitch from "@cps/tool-form-item/Switch.vue";
import RuleTextField from "@cps/tool-form-item/TextField.vue";
import RuleTextarea from "@cps/tool-form-item/Textarea.vue";
import RuleTimePicker from "@cps/tool-form-item/TimePicker.vue";
import ToolGrid from "@cps/tool-grid/index.vue";
import ToolForm from "@cps/tool-form/index.vue";
import ToolFormItem from "@cps/tool-form-item/index.vue";
import { ValidationObserver } from "vee-validate";
import {
  AutoRenderSampleForm,
  PureAutoRenderForm,
} from "@cps/tool-form/autoRender";
import RuleCardExample from "@cps/tool-grid/CardExample.vue";
import { omit } from "lodash";

@Component({
  name: "ToolSampleAutoRender",

  components: {
    ToolGrid,
    ToolForm,
    ToolFormItem,
    RuleCheckbox,
    RuleDatePicker,
    RuleFile,
    RuleRadio,
    RuleSelect,
    RuleSwitch,
    RuleTextField,
    RuleTextarea,
    RuleTimePicker,
    RuleCardExample,
    ValidationObserver,
  },
})
export default class ToolSampleAutoRender extends Vue {
  @Prop({ type: Object, default: () => ({}) }) mode!: AutoRenderSampleForm;

  @VModel({ type: [String, Boolean, Number], default: "" }) returnValue!:
    | string
    | number
    | boolean;

  @Ref() autoRender!: InstanceType<typeof ValidationObserver>;

  async validate(): Promise<boolean> {
    return await this.autoRender.validate();
  }

  getFormField(component: AutoRenderSampleForm): PureAutoRenderForm {
    return omit(component, ["label", "position", "componentName", "value"]);
  }
}
</script>

<style scoped></style>
