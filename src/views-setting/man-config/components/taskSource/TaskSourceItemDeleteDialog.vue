<template>
  <rule-dialog :title="title" persistent @save="onSubmit" ref="deleteDialog">
    <rule-btn small color="default" icon="mdi-trash-can" />

    <template #text>
      <div class="mb-8 mt-4 text-center">
        确定删除数据项
        <span class="text-danger">{{ item.text }}</span> 吗?
      </div>
    </template>

    <template #btn="{ close, save }">
      <div class="d-flex align-center justify-space-between">
        <rule-btn
          small
          color="error"
          :loading="loading"
          class="font-weight-600 text-capitalize"
          @click="save"
          >删除</rule-btn
        >
        <rule-btn
          plain
          small
          :dynamic="false"
          color=""
          class="text-capitalize"
          @click="close"
          >取消</rule-btn
        >
      </div>
    </template>
  </rule-dialog>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Ref } from "vue-property-decorator";
import { RegisterBtn, RegisterDialog } from "@cps/the-mixins";
import { IDeleteDialog } from "@/types/IDeleteDialog";
import { taskSourceItemResponse } from "@/types/taskSource";
import { taskSourceItemDelete } from "@/requests/apis/zRisker/taskSource";
import EditEmit from "@cps/rule-dailog/mixins/editEmit";
import RuleDialog from "@cps/rule-dailog/index.vue";

@Component({
  name: "TaskSourceItemDeleteDialog",
})
export default class TaskSourceItemDeleteDialog
  extends Mixins(RegisterBtn, RegisterDialog, EditEmit)
  implements IDeleteDialog
{
  title = "确认删除数据项";

  loading = false;

  // 删除dialog ref
  @Ref() deleteDialog?: RuleDialog;

  @Prop({ type: Object, default: () => ({}), required: true })
  item!: taskSourceItemResponse;

  @Prop({ type: Number, required: true }) id!: number;

  async onSubmit(): Promise<void> {
    if (!this.id) return;

    this.loading = true;

    if (
      !(await taskSourceItemDelete({
        propertyId: this.id,
        ids: [this.item.id],
      }))
    ) {
      this.loading = false;

      return this.submitFail();
    }

    this.submitSuccess(this.item);

    this.deleteDialog?.close();

    this.loading = false;
  }
}
</script>
