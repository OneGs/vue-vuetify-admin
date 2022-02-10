<template>
  <tool-paginated-table
    ref="taskPropertyTable"
    title="属性管理"
    :headers="taskPropertyHeaders"
    :request-fun="taskPropertyPages"
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
          <task-property-add-dialog @submit-success="submitSuccess(true)">
            <rule-btn small>新增</rule-btn>
          </task-property-add-dialog>
        </v-col>
      </v-row>
    </template>

    <template #item.type="{ item }">
      {{ $config.propertyEnum[item["type"]] }}
    </template>

    <template #item.actions="{ item }">
      <div v-if="!item['modifiable']">---</div>

      <div class="d-flex align-center justify-center" v-else>
        <task-property-edit-dialog
          :data="item"
          @submit-success="submitSuccess()"
        >
          <rule-btn small color="default" icon="mdi-pencil" />
        </task-property-edit-dialog>

        <task-property-delete-dialog
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
import { taskPropertyPage } from "@req/apis/zRisker/taskProperty";
import { zRiskerResponseItem } from "@/types/zRisker";
import PaginatedTable from "@cps/tool-table/PaginatedTable.vue";
import TaskPropertyAddDialog from "@/views-setting/man-config/components/taskProperty/TaskPropertyAddDialog";
import TaskPropertyEditDialog from "@/views-setting/man-config/components/taskProperty/TaskPropertyEditDialog";
import TaskPropertyDeleteDialog from "@/views-setting/man-config/components/taskProperty/TaskPropertyDeleteDialog.vue";
import { taskPropertyQuery, taskPropertyResponse } from "@/types/taskProperty";

@Meta({ title: "属性管理", order: 80 })
@Component({
  name: "TaskProperty",
  components: {
    TaskPropertyEditDialog,
    TaskPropertyAddDialog,
    TaskPropertyDeleteDialog,
  },
})
export default class TaskProperty extends Mixins(RegisterAll) {
  // 接收数据
  items = [];

  // 查询参数
  query: taskPropertyQuery = {
    keyword: "",
  };

  // 表格头部信息
  taskPropertyHeaders: AutoDataTableHeader[] = [
    { text: "任务属性", value: "name", width: 200 },
    { text: "唯一标识", value: "identifier", width: 200 },
    { text: "备注", value: "description" },
    { text: "类型", value: "type", width: 120 },
    { text: "操作", value: "actions", width: 150, align: "center" },
  ];

  // 表格ref
  @Ref() taskPropertyTable?: PaginatedTable;

  // 表格搜索
  async search(): Promise<void> {
    this.taskPropertyTable?.resetPagingIndex();

    this.taskPropertyTable?.flash(true, this.query);
  }

  // 更新成功后：通过刷新表单改变数据
  async submitSuccess(isMountPaging = false): Promise<void> {
    await this.taskPropertyTable?.flash(isMountPaging);
  }

  // 查询
  async taskPropertyPages(
    params: taskPropertyQuery
  ): Promise<zRiskerResponseItem<taskPropertyResponse>> {
    return await taskPropertyPage(params);
  }
}
</script>
