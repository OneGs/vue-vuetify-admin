// ———————————————————————————————————— //* ——— //* 具备校验、排版两个主要功能。
//* 通过mode.modes[index].value进行值的动态绑定（非响应式，需要通过$set设置） //
————————————————————————————————————

<template>
  <validation-observer ref="autoRender">
    <tool-form>
      <tool-grid v-model="groupSlots" :row="mode.row" :col="mode.col">
        <template v-for="slot in groupSlots" #[slot]>
          <tool-form-item :key="slot" :label="getForm(slot).label">
            <component
              :is="getForm(slot).componentName"
              v-bind="getFormField(slot)"
              v-model="getForm(slot).value"
            />
          </tool-form-item>
        </template>
      </tool-grid>
    </tool-form>
  </validation-observer>
</template>

<script lang="ts">
import { Vue, Component, Ref, VModel } from "vue-property-decorator";
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
import RuleRadioColorsPicker from "@cps/tool-form-item/RadioColorsPicker.vue";
import { ValidationObserver } from "vee-validate";
import {
  AutoRenderForm,
  AutoRenderMode,
  PureAutoRenderForm,
} from "@cps/tool-form/autoRender";
import RuleCardExample from "@cps/tool-grid/CardExample.vue";
import { omit } from "lodash";

@Component({
  name: "ToolAutoRender",

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
    RuleRadioColorsPicker,
    ValidationObserver,
  },
})
export default class ToolAutoRender extends Vue {
  @VModel({ type: Object, default: () => ({}) }) mode!: AutoRenderMode;

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
    "RuleRadioColorsPicker",
  ];

  @Ref() autoRender!: InstanceType<typeof ValidationObserver>;

  async validate(): Promise<boolean> {
    return await this.autoRender.validate();
  }

  reset(): void {
    this.autoRender.reset();
  }

  getForm(slotName: string): AutoRenderForm {
    const { modes } = this.mode;

    const example: AutoRenderForm = {
      key: "example",
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
    return omit(this.getForm(slotName), [
      "label",
      "position",
      "componentName",
      "value",
    ]);
  }
}
</script>

<style scoped></style>
