<template>
  <rule-dialog
    title="Creating a Task Type"
    @save="onSubmit"
    ref="taskTypeNewDialog"
  >
    <slot>
      <rule-btn small>add</rule-btn>
    </slot>

    <template #text>
      <tool-auto-render :mode="taskTypeModes" v-model="data" />
    </template>
  </rule-dialog>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Ref } from "vue-property-decorator";
import { RegisterBtn, RegisterDialog, RegisterForm } from "@cps/the-mixins";
import RuleDialog from "@cps/rule-dailog/index.vue";
import { AutoRenderMode } from "@cps/tool-form/autoRender";
import { LoopAny } from "@/types/common";

@Component({
  name: "TaskTypeEdit",
})
export default class TaskTypeEdit extends Mixins(
  RegisterDialog,
  RegisterBtn,
  RegisterForm
) {
  taskTypeModes: AutoRenderMode = {
    row: 3,
    col: 1,
    modes: [
      {
        key: "name",
        label: "Type name",
        position: "0-0",
        componentName: "RuleTextField",
        rules: "required",
      },
      {
        key: "describtion",
        label: "Type group",
        position: "1-0",
        componentName: "RuleSelect",
        options: [
          { label: "city", value: 1 },
          { label: "country", value: 2 },
          { label: "viliger", value: 3 },
        ],
      },
      {
        key: "sex",
        label: "note",
        position: "2-0",
        componentName: "RuleTextarea",
      },
    ],
  };

  @Prop({ type: Object, default: () => ({}) }) data!: LoopAny;

  @Ref() taskTypeNewDialog?: RuleDialog;

  onSubmit(validate: boolean): void {
    if (!validate) return;

    this.taskTypeNewDialog?.close();
  }

  created(): void {
    // this.taskTypeModes.modes.forEach((mode) => {
    //   if (!mode.key) return;
    //
    //   this.$set(mode, "value", this.data[mode.key]);
    // });
  }
}
</script>

<style scoped></style>
