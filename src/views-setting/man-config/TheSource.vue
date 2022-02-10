<template>
  <tool-paginated-table
    ref="taskSourceTable"
    title="数据管理"
    :headers="taskSourceHeaders"
    :request-fun="taskSourcePages"
    :items.sync="items"
    class="paginated-table"
  >
    <template #heading>
      <v-row class="d-flex align-center">
        <v-col cols="5">
          <rule-text-field
            small
            hide-details
            label="搜索属性"
            prepend-inner-icon="mdi-magnify"
            append-icon="mdi-keyboard-return"
            v-model="query.keyword"
            @keydown.enter="search"
          />
        </v-col>

        <v-col class="text-right d-flex justify-end">
          <task-source-add-dialog @submit-success="submitSuccess(true)">
            <rule-btn small>新增</rule-btn>
          </task-source-add-dialog>
        </v-col>
      </v-row>
    </template>

    <template #item.actions="{ item }">
      <div class="d-flex align-center justify-center">
        <task-source-edit-dialog :data="item" @submit-success="submitSuccess()">
          <rule-btn small color="default" icon="mdi-pencil" />
        </task-source-edit-dialog>

        <task-source-delete-dialog
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
import { taskSourcePage } from "@req/apis/zRisker/taskSource";
import { zRiskerResponseItem } from "@/types/zRisker";
import PaginatedTable from "@cps/tool-table/PaginatedTable.vue";
import { taskSourceQuery, taskSourceResponse } from "@/types/taskSource";
import TaskSourceEditDialog from "@/views-setting/man-config/components/taskSource/TaskSourceEditDialog";
import TaskSourceAddDialog from "@/views-setting/man-config/components/taskSource/TaskSourceAddDialog";
import TaskSourceDeleteDialog from "@/views-setting/man-config/components/taskSource/TaskSourceDeleteDialog.vue";

@Meta({ title: "数据管理", order: 70 })
@Component({
  name: "TheSource",
  components: {
    TaskSourceEditDialog,
    TaskSourceAddDialog,
    TaskSourceDeleteDialog,
  },
})
export default class TheSource extends Mixins(RegisterAll) {
  // 接收数据
  items = [];

  // 查询参数
  query: taskSourceQuery = {
    keyword: "",
  };

  // 表格头部信息
  taskSourceHeaders: AutoDataTableHeader[] = [
    { text: "数据源名称", value: "name", width: 200 },
    { text: "备注", value: "description" },
    { text: "操作", value: "actions", width: 150, align: "center" },
  ];

  // 表格ref
  @Ref() taskSourceTable?: PaginatedTable;

  // 表格搜索
  async search(): Promise<void> {
    this.taskSourceTable?.resetPagingIndex();

    this.taskSourceTable?.flash(true, this.query);
  }

  // 更新成功后：通过刷新表单改变数据
  async submitSuccess(isMountPaging = false): Promise<void> {
    await this.taskSourceTable?.flash(isMountPaging);
  }

  // 查询
  async taskSourcePages(
    params: taskSourceQuery
  ): Promise<zRiskerResponseItem<taskSourceResponse>> {
    return await taskSourcePage(params);
  }
}
</script>
