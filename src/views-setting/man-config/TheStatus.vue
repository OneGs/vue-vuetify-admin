<template>
  <tool-paginated-table
    title="Status Manager"
    :items.sync="items"
    :headers="headers"
    :request-fun="requestFun"
  >
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

    <template #item.actions="{ item }">
      <div class="d-flex align-center">
        <task-status-edit
          :data="item"
          @submit-success="submitSuccess($event, item)"
        >
          <rule-btn small color="default" icon="mdi-pencil" class="ml-n3" />
        </task-status-edit>

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
import { Meta } from "@/libs/auto-router/index";
import { RegisterAll } from "@cps/the-mixins";
import { AutoDataTableHeader } from "@cps/tool-form/autoRender";
import { getStatus } from "@req/apis/base/man-config";
import { LoopAny } from "@/types/common";
import TaskStatusEdit from "@/views-setting/man-config/components/TaskStatusEdit.vue";

@Meta({
  title: "Status Manager",
  order: 90,
})
@Component({
  name: "TheStatus",
  components: { TaskStatusEdit },
})
export default class TheStatus extends Mixins(RegisterAll) {
  items = [];

  headers: AutoDataTableHeader[] = [
    {
      text: "task status",
      value: "name",
      width: "200px",
    },
    { text: "note", value: "note" },
    { text: "type", value: "type" },
    { text: "actions", value: "actions", width: 130 },
  ];

  requestFun = getStatus;

  typeStatusIconAndColor(item: LoopAny): { icon: string; color: string } {
    let icon = "mdi-example";

    switch (item.type) {
      case "未开始":
        icon = "mdi-minus-circle-outline";
        break;
      case "进行中":
        icon = "mdi-circle-slice-3";
        break;
      case "已完成":
        icon = "mdi-check-circle-outline";
        break;
    }

    return { icon, color: item.color };
  }

  submitSuccess(data: LoopAny, item: LoopAny): void {
    Object.keys(data).forEach((key) => {
      item[key] = data[key];
    });
  }
}
</script>

<style scoped></style>
