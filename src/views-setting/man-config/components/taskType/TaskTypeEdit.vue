// ———————————————————————————————————— //* ——— 提供数据的操作，入口和出口！ //*
入口：通过data引入数据（非响应式，避免同步修改table中的数据）——
如果想要修改数据，通过flashData。 //* 出口： 操作成功后通过事件抛出 //
————————————————————————————————————
<template>
  <rule-dialog
    title="Creating a Task Type"
    @save="onSubmit"
    @open-before="flash(data)"
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
import { AutoRenderMode } from "@cps/tool-form/autoRender";
import RuleDialog from "@cps/rule-dailog/index.vue";
import { toKeyValueMap } from "@uts/tools";
import { taskTypeUpdate } from "@req/apis/zRisker/taskType";
import {
  taskTypeBodyAdd,
  taskTypeBodyUpdate,
  taskTypeResponse,
} from "@/types/taskType";

@Component({
  name: "TaskTypeEdit",
})
export default class TaskTypeEdit extends Mixins(
  RegisterDialog,
  RegisterBtn,
  RegisterForm
) {
  // 渲染结构
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
        key: "description",
        label: "note",
        position: "1-0",
        componentName: "RuleTextarea",
      },
    ],
  };

  // 接受数据，用于渲染
  @Prop({ type: Object, default: () => ({}) }) data!: taskTypeResponse;

  // ref rule-dialog 用于执行rule-dialog的函数
  @Ref() editDialog?: RuleDialog;

  // 点击save保存成功后
  @Emit()
  submitSuccess(
    modes: taskTypeBodyAdd | taskTypeBodyUpdate
  ): taskTypeBodyAdd | taskTypeBodyUpdate {
    return modes;
  }

  // 点击save保存失败后
  @Emit()
  submitFail(): void {
    //
  }

  // 点击save执行
  async onSubmit(validate: boolean): Promise<void> {
    if (!validate) return this.submitFail();

    const requestInfo = toKeyValueMap(
      this.renderMode.modes
    ) as taskTypeBodyUpdate;

    if (!(await taskTypeUpdate({ ...this.data, ...requestInfo }))) return;

    this.submitSuccess(requestInfo);

    this.editDialog?.close();
  }

  // 刷新data数据，保证每次数据都是最新的（不能放在created内）
  flash(data: taskTypeResponse): void {
    this.renderMode.modes.forEach((mode) => {
      this.$set(mode, "value", data[mode.key as keyof taskTypeResponse]);
    });
  }
}
</script>
