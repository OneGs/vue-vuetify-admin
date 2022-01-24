// ———————————————————————————————————— //* ——— 负责显示、同时和其它操作通信 //*
1. 内部值发生变化，通知其它操作——将data传入操作组件 //* 2.
操作组件更新有两种途径：* 数据更新整体刷新（请求后刷新）。*
修改响应式item中的某一个值。 // ————————————————————————————————————

<template>
  <tool-paginated-table
    ref="taskTypeTable"
    title="Task Type"
    :headers="taskTypeHeaders"
    :request-fun="taskTypePages"
    :items.sync="items"
  >
    <template #heading>
      <v-row class="d-flex align-center">
        <v-col cols="5">
          <rule-text-field
            small
            hide-details
            label="search"
            @keydown.enter="search"
          />
        </v-col>

        <v-col class="text-right d-flex justify-end">
          <task-type-edit />
        </v-col>
      </v-row>
    </template>

    <template #item.actions="{ item }">
      <div class="d-flex align-center">
        <task-type-edit
          :data="item"
          is-edit
          @submit-success="submitSuccess($event, item)"
        >
          <rule-btn small color="default" icon="mdi-pencil" class="ml-n3" />
        </task-type-edit>

        <rule-dialog
          title="notify"
          @save="taskTypeDelete(item)"
          ref="deleteDialog"
        >
          <rule-btn small color="default" icon="mdi-trash-can" />

          <template #text>
            <div class="mb-8 mt-4 text-center">
              are you sure delete
              <span class="text-danger">{{ item.name }}</span> ?
            </div>
          </template>

          <template #btn="{ close, save }">
            <div class="d-flex align-center justify-space-between">
              <rule-btn
                color="error"
                class="font-weight-600 text-capitalize"
                @click="save"
                >delete</rule-btn
              >
              <rule-btn
                plain
                :dynamic="false"
                color=""
                class="text-capitalize"
                @click="close"
                >Cancel</rule-btn
              >
            </div>
          </template>
        </rule-dialog>
      </div>
    </template>
  </tool-paginated-table>
</template>

<script lang="ts">
import { Component, Mixins, Ref } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import {
  RegisterBtn,
  RegisterCard,
  RegisterDialog,
  RegisterForm,
  RegisterTable,
} from "@cps/the-mixins";
import { AutoDataTableHeader } from "@cps/tool-form/autoRender";
import TaskGroups from "@/views-setting/man-config/components/taskType/TaskGroups.vue";
import TaskTypeEdit from "@/views-setting/man-config/components/taskType/TaskTypeEdit.vue";
import { LoopAny } from "@/types/common";
import { taskTypeDelete, taskTypePage } from "@req/apis/zRisker/taskType";
import {
  taskTypeResponse,
  zRiskerRequestParams,
  zRiskerResponseItem,
} from "@req/zRisker";
import RuleDialog from "@cps/rule-dailog/index.vue";
import PaginatedTable from "@cps/tool-table/PaginatedTable.vue";
import "@/views-setting/man-config/components/taskType/TaskTypeAdd";

@Meta({ title: "Task Type", order: 100 })
@Component({
  name: "TaskType",
  components: { TaskTypeEdit, TaskGroups },
})
export default class TaskType extends Mixins(
  RegisterForm,
  RegisterBtn,
  RegisterCard,
  RegisterTable,
  RegisterDialog
) {
  items = [];

  taskTypeHeaders: AutoDataTableHeader[] = [
    {
      text: "task type",
      value: "name",
      width: "200px",
      editable: true,
    },
    { text: "note", value: "description" },
    { text: "actions", value: "actions", width: 130 },
  ];

  @Ref() deleteDialog?: RuleDialog;

  @Ref() taskTypeTable?: PaginatedTable;

  search(): void {
    console.log("enter");
  }

  submitSuccess(data: LoopAny, item: LoopAny): void {
    Object.keys(data).forEach((key) => {
      item[key] = data[key];
    });
  }

  async taskTypePages(
    params: zRiskerRequestParams
  ): Promise<zRiskerResponseItem<taskTypeResponse>> {
    return await taskTypePage(params);
  }

  async taskTypeDelete(item: taskTypeResponse): Promise<void> {
    if (!(await taskTypeDelete({ ids: [item.id] }))) return;

    await this.taskTypeTable?.flashTable(true);

    this.deleteDialog?.close();
  }
}
</script>

<style scoped />
