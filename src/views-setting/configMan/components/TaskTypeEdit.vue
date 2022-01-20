<template>
  <rule-dialog
    title="Creating a Task Type"
    @save="onSubmit"
    @open-before="openBefore"
    ref="taskTypeNewDialog"
  >
    <slot>
      <rule-btn small>add</rule-btn>
    </slot>

    <template #text>
      <tool-auto-render v-model="taskTypeModes" />
    </template>
  </rule-dialog>
</template>

<script lang="ts">
import { Component, Emit, Mixins, Prop, Ref } from "vue-property-decorator";
import { RegisterBtn, RegisterDialog, RegisterForm } from "@cps/the-mixins";
import RuleDialog from "@cps/rule-dailog/index.vue";
import { AutoRenderForm, AutoRenderMode } from "@cps/tool-form/autoRender";
import { LoopAny } from "@/types/common";
import { toKeyValueMap } from "@uts/tools";

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
        label: "comment",
        position: "1-0",
        componentName: "RuleTextarea",
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

  @Emit()
  submitSuccess(modes: AutoRenderForm[]): LoopAny {
    return toKeyValueMap(
      modes as Array<{
        key: string;
        value: string | boolean | number;
      }>
    );
  }

  @Emit()
  submitFail(): boolean {
    return false;
  }

  onSubmit(validate: boolean): void {
    if (!validate) return;

    this.submitSuccess(this.taskTypeModes.modes);

    this.taskTypeNewDialog?.close();
  }

  openBefore(): void {
    this.flashData(this.data);
  }

  flashData(data: LoopAny): void {
    this.taskTypeModes.modes.forEach((mode) => {
      console.log(data[mode.key]);

      mode.value = data[mode.key];
    });
  }
}
</script>

<style scoped></style>
