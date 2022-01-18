<template>
  <tool-form>
    <tool-grid v-model="groupSlots" :row="mode.row" :col="mode.col">
      <template v-for="slot in groupSlots" #[slot]>
        <tool-form-item :key="slot" :label="getForm(slot).label">
          <component
            :is="getForm(slot).componentName"
            v-bind="getFormField(slot)"
          />
        </tool-form-item>
      </template>
    </tool-grid>
  </tool-form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
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
import {
  AutoRenderForm,
  AutoRenderMode,
  PureAutoRenderForm,
} from "@cps/tool-form/autoRender";
import RuleCardExample from "@cps/tool-grid/CardExample.vue";
import { omit } from "lodash";

@Component({
  name: "AutoRender",

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
  },
})
export default class AutoRender extends Vue {
  @Prop({ type: Object, default: () => ({}) }) mode!: AutoRenderMode;

  groupSlots = [];

  componentMap: Array<string> = [
    "RuleCheckbox",
    "RuleDatePicker",
    "RuleFile",
    "RuleRadio",
    "RuleSelect",
    "RuleSwitch",
    "RuleTextField",
    "RuleTextarea",
    "RuleTimePicker",
    "RuleCardExample",
  ];

  getForm(slotName: string): AutoRenderForm {
    const { modes } = this.mode;

    const example: AutoRenderForm = {
      label: slotName,
      position: slotName,
      componentName: "RuleCardExample",
    };

    if (!modes || !modes.length) return example;

    const formMode = modes.filter((mode) => {
      return mode.position === slotName;
    })[0];

    if (!formMode) return example;

    return this.componentMap.includes(formMode.componentName)
      ? formMode
      : example;
  }

  getFormField(slotName: string): PureAutoRenderForm {
    return omit(this.getForm(slotName), ["label", "position", "componentName"]);
  }
}
</script>

<style scoped></style>
