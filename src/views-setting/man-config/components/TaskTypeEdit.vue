// ———————————————————————————————————— //* ——— 提供数据的操作，入口和出口！ //*
入口：通过data引入数据（非响应式，避免同步修改table中的数据）——
如果想要修改数据，通过flashData。 //* 出口： 操作成功后通过事件抛出 //
————————————————————————————————————

<template>
  <rule-dialog
    title="Creating a Task Type"
    @save="onSubmit"
    @open-before="openBefore"
    ref="editDialog"
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
  renderMode: AutoRenderMode = {
    row: 3,
    col: 1,
    modes: [
      {
        key: "name",
        label: "Type name",
        value: "",
        position: "0-0",
        componentName: "RuleTextField",
        rules: "required",
      },
      {
        key: "note",
        label: "note",
        position: "1-0",
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
