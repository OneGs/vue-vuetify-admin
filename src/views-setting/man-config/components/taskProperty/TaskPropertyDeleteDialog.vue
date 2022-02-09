<template>
  <rule-dialog :title="title" persistent @save="onSubmit" ref="deleteDialog">
    <rule-btn small color="default" icon="mdi-trash-can" />

    <template #text>
      <div class="mb-8 mt-4 text-center">
        确定要删除
        <span class="text-danger">{{ item.name }}</span> ?
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
import { taskPropertyResponse } from "@/types/taskProperty";
import { taskPropertyDelete } from "@/requests/apis/zRisker/taskProperty";
import EditEmit from "@cps/rule-dailog/mixins/editEmit";
import RuleDialog from "@cps/rule-dailog/index.vue";

@Component({
  name: "taskPropertyDeleteDialog",
})
export default class taskPropertyDeleteDialog
  extends Mixins(RegisterBtn, RegisterDialog, EditEmit)
  implements IDeleteDialog
{
  title = "提示";

  loading = false;

  // 删除dialog ref
  @Ref() deleteDialog?: RuleDialog;

  @Prop({ type: Object, default: () => ({}) }) item!: taskPropertyResponse;

  async onSubmit(): Promise<void> {
    this.loading = true;

    if (!(await taskPropertyDelete({ ids: [this.item.id] }))) {
      this.loading = false;

      return this.submitFail();
    }

    this.submitSuccess(this.item);

    this.deleteDialog?.close();

    this.loading = false;
  }
}
</script>

<style scoped></style>
