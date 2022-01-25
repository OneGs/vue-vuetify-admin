<template>
  <tool-paginated-table
    title="Status Manager"
    ref="taskStateTable"
    :items.sync="items"
    :headers="headers"
    :request-fun="taskStatePages"
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
          <task-state-add-dialog @submit-success="submitSuccess(true)" />
        </v-col>
      </v-row>
    </template>

    <template #item.name="{ item }">
      <v-chip
        :color="typeStatusIconAndColor(item).color"
        label
        text-color="white"
        small
      >
        <v-icon left small v-text="typeStatusIconAndColor(item).icon" />
        <span>{{ item.name }}</span>
      </v-chip>
    </template>

    <template #item.type="{ item }">
      {{ typeZ_NString(item.type) }}
    </template>

    <template #item.actions="{ item }">
      <div class="d-flex align-center">
        <task-state-edit-dialog
          :data="item"
          @submit-success="submitSuccess(false)"
        >
          <rule-btn small color="default" icon="mdi-pencil" class="ml-n3" />
        </task-state-edit-dialog>

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
import { Component, Mixins, Ref } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";
import { RegisterAll } from "@cps/the-mixins";
import { AutoDataTableHeader } from "@cps/tool-form/autoRender";
import TaskStateEditDialog from "@/views-setting/man-config/components/taskState/TaskStateEditDialog";
import TaskStateAddDialog from "@/views-setting/man-config/components/taskState/TaskStateAddDialog";
import { zRiskerResponseItem } from "@/types/zRisker";
import { taskStateQuery, taskStateResponse } from "@/types/taskState";
import { taskStatePage } from "@req/apis/zRisker/taskState";
import RuleDialog from "@cps/rule-dailog/index.vue";
import PaginatedTable from "@cps/tool-table/PaginatedTable.vue";

@Meta({
  title: "Status Manager",
  order: 90,
})
@Component({
  name: "TheStatus",
  components: { TaskStateEditDialog, TaskStateAddDialog },
})
export default class TheStatus extends Mixins(RegisterAll) {
  items = [];

  // 查询参数
  query: taskStateQuery = {
    keyword: "",
  };

  headers: AutoDataTableHeader[] = [
    {
      text: "task status",
      value: "name",
      width: "200px",
    },
    { text: "note", value: "description" },
    { text: "type", value: "type" },
    { text: "actions", value: "actions", width: 130 },
  ];

  // 删除dialog ref
  @Ref() deleteDialog?: RuleDialog;

  // 表格ref
  @Ref() taskStateTable?: PaginatedTable;

  // 表格搜索
  async search(): Promise<void> {
    this.taskStateTable?.resetPagingIndex();

    this.taskStateTable?.flash(true, this.query);
  }

  // 查询
  async taskStatePages(
    params: taskStateQuery
  ): Promise<zRiskerResponseItem<taskStateResponse>> {
    return await taskStatePage(params);
  }

  typeStatusIconAndColor(item: taskStateResponse): {
    icon: string;
    color: string;
  } {
    let icon = "mdi-example";

    switch (item.type) {
      case 0:
        icon = "mdi-minus-circle-outline";
        break;
      case 1:
        icon = "mdi-circle-slice-3";
        break;
      case 2:
        icon = "mdi-check-circle-outline";
        break;
    }

    return { icon, color: item.icon };
  }

  typeZ_NString(type: number): string {
    let z_nString = "";

    switch (type) {
      case 0:
        z_nString = "未开始";
        break;
      case 1:
        z_nString = "进行中";
        break;
      case 2:
        z_nString = "已完成";
        break;
    }

    return z_nString;
  }

  async submitSuccess(isMountPaging = false): Promise<void> {
    await this.taskStateTable?.flash(isMountPaging);
  }
}
</script>

<style scoped></style>
