<template>
  <div>
    <tool-paginated-table
      :request-fun="getTemp"
      :headers="headers"
      :items.sync="items"
      :body-class="'py-5'"
      title="Light Table"
    >
      <template #item.status="{ item }">
        <span class="me-1" :class="[`text-${getColor(item.status)}`]">●</span>
        {{ item.status }}
      </template>

      <template #item.completion="{ item }">
        <div class="d-flex align-center">
          <span class="mr-2">{{ item.completion }}%</span>
          <v-progress-linear
            :value="item.completion"
            :color="getCompletionColor(item.completion)"
          />
        </div>
      </template>
    </tool-paginated-table>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import { RegisterHeading, RegisterTable } from "@cps/the-mixins";
import { DataStruct } from "@req/tool";

const colorMap: { [key: string]: string } = {
  pending: "warning",
  completed: "success",
  delayed: "danger",
  "on schedule": "info",
};

@Meta({ title: "Table", order: 100 })
@Component({
  name: "TheTables",
})
export default class TheTables extends Mixins(RegisterHeading, RegisterTable) {
  items = [];

  headers = [
    { text: "Project", value: "project" },
    { text: "Budget", value: "budget" },
    { text: "Status", value: "status" },
    { text: "Users", value: "users" },
    { text: "Completion", value: "completion" },
  ];

  getTemp(): DataStruct {
    return {
      pageIndex: 1,
      pageSize: 10,
      pageTotal: 10,
      data: [
        {
          project: "Argon Design System",
          budget: "$2500",
          status: "pending",
          users: "John",
          completion: 30,
        },
        {
          project: "Angular Now UI Kit PRO",
          budget: "$1800",
          status: "completed",
          users: "John",
          completion: 50,
        },
        {
          project: "Black Dashboard",
          budget: "$3150",
          status: "delayed",
          users: "John",
          completion: 80,
        },
        {
          project: "React Material Dashboard",
          budget: "$2200",
          status: "on schedule",
          users: "John",
          completion: 60,
        },
        {
          project: "Vue Paper UI Kit PRO",
          budget: "$2200",
          status: "completed",
          users: "John",
          completion: 88,
        },
      ],
    };
  }

  getColor(type: string): string {
    return colorMap[type] || "default";
  }

  getCompletionColor(completion: number | string): string {
    completion = Number(completion);

    if (completion < 40) return "error";

    if (completion < 60) return "warning";

    if (completion < 80) return "info";

    return "success";
  }
}
</script>

<style scoped lang="scss"></style>
