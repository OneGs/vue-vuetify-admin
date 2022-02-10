// ———————————————————————————————————— //* ——— 负责显示、同时和其它操作通信 //*
1. 内部值发生变化，通知其它操作——将data传入操作组件 //* 2.
操作组件更新有两种途径：* 数据更新整体刷新（请求后刷新）。*
修改响应式item中的某一个值。 // ————————————————————————————————————
<template>
  <tool-paginated-table
    ref="taskTypeTable"
    title="任务类型"
    :headers="taskTypeHeaders"
    :request-fun="taskTypePages"
    :items.sync="items"
    class="paginated-table"
  >
    <template #heading>
      <v-row class="d-flex align-center">
        <v-col cols="5">
          <rule-text-field
            small
            hide-details
            label="搜索任务类型"
            prepend-inner-icon="mdi-magnify"
            append-icon="mdi-keyboard-return"
            v-model="query.keyword"
            @keydown.enter="search"
          />
        </v-col>

        <v-col class="text-right d-flex justify-end">
          <task-type-add-dialog @submit-success="submitSuccess(true)">
            <rule-btn small>新增</rule-btn>
          </task-type-add-dialog>
        </v-col>
      </v-row>
    </template>

    <template #item.name="{ item }">
      <div class="d-flex align-center">
        <tool-icon-svg
          v-if="item.icon"
          :icon-class="item.icon"
          small
          class="rounded mr-3"
          style="fill: white"
          :style="{ background: taskTypeIconColor(item.icon) }"
        />
        <span>{{ item.name }}</span>
      </div>
    </template>

    <template #item.actions="{ item }">
      <div class="d-flex align-center justify-center">
        <task-type-edit-dialog :data="item" @submit-success="submitSuccess()">
          <rule-btn small color="default" icon="mdi-pencil" />
        </task-type-edit-dialog>

        <task-type-delete-dialog
          :item="item"
          @submit-success="submitSuccess(true)"
        />
      </div>
    </template>
  </tool-paginated-table>
</template>

<script lang="ts">
import { Component, Mixins, Ref } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import { RegisterAll } from "@cps/the-mixins";
import { AutoDataTableHeader } from "@cps/tool-form/autoRender";
import { taskTypePage } from "@req/apis/zRisker/taskType";
import { zRiskerResponseItem } from "@/types/zRisker";
import PaginatedTable from "@cps/tool-table/PaginatedTable.vue";
import TaskTypeAddDialog from "@/views-setting/man-config/components/taskType/TaskTypeAddDialog";
import TaskTypeEditDialog from "@/views-setting/man-config/components/taskType/TaskTypeEditDialog";
import { taskTypeQuery, taskTypeResponse } from "@/types/taskType";
import ToolIconSvg from "@cps/tool-icon-svg/index.vue";
import config from "@/config";
import TaskTypeDeleteDialog from "@/views-setting/man-config/components/taskType/TaskTypeDeleteDialog.vue";

@Meta({ title: "任务类型", order: 100 })
@Component({
  name: "TaskType",
  components: {
    TaskTypeDeleteDialog,
    ToolIconSvg,
    TaskTypeEditDialog,
    TaskTypeAddDialog,
  },
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
      text: "任务类型",
      value: "name",
      width: "200px",
    },
    { text: "备注", value: "description" },
    { text: "操作", value: "actions", width: 130, align: "center" },
  ];

  // 表格ref
  @Ref() taskTypeTable?: PaginatedTable;

  taskTypeIconColor(name: string): string {
    return config.taskIcons?.filter((icon) => {
      return icon.icon === name;
    })[0]?.color;
  }

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
}
</script>
