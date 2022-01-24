// ———————————————————————————————————— //* ——— 负责显示、同时和其它操作通信 //*
1. 内部值发生变化，通知其它操作——将data传入操作组件 //* 2.
操作组件更新有两种途径：* 数据更新整体刷新（请求后刷新）。*
修改响应式item中的某一个值。 // ————————————————————————————————————

<template>
  <tool-paginated-table
    title="Task Type"
    :headers="taskTypeHeaders"
    :request-fun="getTaskTypes"
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
          @submit-success="submitSuccess($event, item)"
        >
          <rule-btn small color="default" icon="mdi-pencil" class="ml-n3" />
        </task-type-edit>

        <rule-dialog title="notify">
          <rule-btn small color="default" icon="mdi-trash-can" />

          <template #text>
            <div class="mb-8 mt-4 text-center">
              are you sure delete
              <span class="text-danger">{{ item.name }}</span> ?
            </div>
          </template>

          <template #btn>
            <div class="d-flex align-center justify-space-between">
              <rule-btn color="error" class="font-weight-600 text-capitalize"
                >delete</rule-btn
              >
              <rule-btn plain :dynamic="false" color="" class="text-capitalize"
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
import { Component, Mixins } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import { getTaskType } from "@req/apis/base/man-config";
import {
  RegisterBtn,
  RegisterCard,
  RegisterDialog,
  RegisterForm,
  RegisterTable,
} from "@cps/the-mixins";
import { AutoDataTableHeader } from "@cps/tool-form/autoRender";
import TaskGroups from "@/views-setting/man-config/components/TaskGroups.vue";
import TaskTypeEdit from "@/views-setting/man-config/components/TaskTypeEdit.vue";
import { LoopAny } from "@/types/common";

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
    { text: "note", value: "note" },
    { text: "actions", value: "actions", width: 130 },
  ];

  getTaskTypes = getTaskType;

  search(): void {
    console.log("enter");
  }

  submitSuccess(data: LoopAny, item: LoopAny): void {
    Object.keys(data).forEach((key) => {
      item[key] = data[key];
    });
  }
}
</script>

<style scoped />
