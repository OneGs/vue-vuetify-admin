<template>
  <rule-dialog
    title="Creating a Task Type"
    ref="editDialog"
    @save="onSubmit"
    @open-before="openBefore"
  >
    <slot>
      <rule-btn small>add</rule-btn>
    </slot>

    <template #text>
      <tool-auto-render v-model="renderMode" />
    </template>
  </rule-dialog>
</template>

<script lang="ts">
import { Component, Emit, Mixins, Prop, Ref } from "vue-property-decorator";
import { RegisterBtn, RegisterDialog, RegisterForm } from "@cps/the-mixins";
import { AutoRenderForm, AutoRenderMode } from "@cps/tool-form/autoRender";
import { LoopAny } from "@/types/common";
import RuleDialog from "@cps/rule-dailog/index.vue";
import { toKeyValueMap } from "@uts/tools";

@Component({
  name: "TaskStatusEdit",
})
export default class TaskStatusEdit extends Mixins(
  RegisterForm,
  RegisterDialog,
  RegisterBtn
) {
  renderMode: AutoRenderMode = {
    row: 3,
    col: 1,
    modes: [
      {
        key: "name",
        label: "任务状态名称",
        position: "0-0",
        componentName: "RuleTextField",
        rules: "required",
      },
      {
        key: "type",
        label: "任务类型",
        position: "1-0",
        componentName: "RuleSelect",
        options: [
          { label: "未开始", value: "未开始" },
          { label: "进行中", value: "进行中" },
          { label: "已完成", value: "已完成" },
        ],
      },
      {
        key: "note",
        label: "备注",
        position: "2-0",
        componentName: "RuleTextarea",
      },
    ],
  };

  @Prop({ type: Object, default: () => ({}) }) data!: LoopAny;

  @Ref() editDialog?: RuleDialog;

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

    this.submitSuccess(this.renderMode.modes);

    this.editDialog?.close();
  }

  openBefore(): void {
    this.flashData(this.data);
  }

  flashData(data: LoopAny): void {
    this.renderMode.modes.forEach((mode) => {
      this.$set(mode, "value", data[mode.key]);
    });
  }
}
</script>

<style scoped></style>
