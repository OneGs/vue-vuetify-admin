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
    @edit-dialog-save="taskTypeUpdate"
  >
    <template #heading>
      <v-row class="d-flex align-center">
        <v-col cols="5">
          <rule-text-field
            small
            hide-details
            label="search by keyword"
            v-model="query.keyword"
            @keydown.enter="search"
          />
        </v-col>

        <v-col class="text-right d-flex justify-end">
          <task-type-add-dialog @submit-success="submitSuccess(true)" />
        </v-col>
      </v-row>
    </template>

    <template #item.actions="{ item }">
      <div class="d-flex align-center">
        <task-type-edit-dialog :data="item" @submit-success="submitSuccess()">
          <rule-btn small color="default" icon="mdi-pencil" class="ml-n3" />
        </task-type-edit-dialog>

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
import { RegisterAll } from "@cps/the-mixins";
import { AutoDataTableHeader } from "@cps/tool-form/autoRender";
import {
  taskTypeDelete,
  taskTypePage,
  taskTypeUpdate,
} from "@req/apis/zRisker/taskType";
import { zRiskerResponseItem } from "@/types/zRisker";
import RuleDialog from "@cps/rule-dailog/index.vue";
import PaginatedTable from "@cps/tool-table/PaginatedTable.vue";
import TaskTypeAddDialog from "@/views-setting/man-config/components/taskType/TaskTypeAddDialog";
import TaskTypeEditDialog from "@/views-setting/man-config/components/taskType/TaskTypeEditDialog";
import {
  taskTypeBodyUpdate,
  taskTypeQuery,
  taskTypeResponse,
} from "@/types/taskType";

@Meta({ title: "Task Type", order: 100 })
@Component({
  name: "TaskType",
  components: { TaskTypeEditDialog, TaskTypeAddDialog },
})
export default class TaskType extends Mixins(RegisterAll) {
  // 接收数据
  items = [];

  // 查询参数
  query: taskTypeQuery = {
    keyword: "",
  };

  // 表格头部信息
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

  // 删除dialog ref
  @Ref() deleteDialog?: RuleDialog;

  // 表格ref
  @Ref() taskTypeTable?: PaginatedTable;

  // 表格搜索
  async search(): Promise<void> {
    this.taskTypeTable?.resetPagingIndex();

    this.taskTypeTable?.flash(true, this.query);
  }

  // 更新成功后：通过刷新表单改变数据
  async submitSuccess(isMountPaging = false): Promise<void> {
    await this.taskTypeTable?.flash(isMountPaging);
  }

  // 查询
  async taskTypePages(
    params: taskTypeQuery
  ): Promise<zRiskerResponseItem<taskTypeResponse>> {
    return await taskTypePage(params);
  }

  // 更新
  async taskTypeUpdate(item: taskTypeBodyUpdate): Promise<void> {
    await taskTypeUpdate(item);

    // hack skill 无论修改成功与否，都交由最后请求过来的数据决定
    await this.taskTypeTable?.flash();
  }

  // 删除
  async taskTypeDelete(item: taskTypeResponse): Promise<void> {
    if (!(await taskTypeDelete({ ids: [item.id] }))) return;

    await this.taskTypeTable?.flash(true);

    this.deleteDialog?.close();
  }
}
</script>

<style scoped />
