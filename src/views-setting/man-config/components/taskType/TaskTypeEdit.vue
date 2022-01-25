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
import { Component, Mixins } from "vue-property-decorator";
import { RegisterBtn, RegisterDialog, RegisterForm } from "@cps/the-mixins";
import { toKeyValueMap } from "@uts/tools";
import { taskTypeUpdate } from "@req/apis/zRisker/taskType";
import { taskTypeBodyUpdate } from "@/types/taskType";
import { IEditDialog } from "@/types/IEditDialog";
import EditEmit from "../mixins/editEmit";
import EditDataRender from "../mixins/editDataRender";

@Component({
  name: "TaskTypeEdit",
})
export default class TaskTypeEdit
  extends Mixins(
    RegisterDialog,
    RegisterBtn,
    RegisterForm,
    EditEmit,
    EditDataRender
  )
  implements IEditDialog
{
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
}
</script>
