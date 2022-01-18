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
            @keydown.enter="taskTypeSearch"
          />
        </v-col>

        <v-col class="text-right">
          <rule-btn small>add</rule-btn>
        </v-col>
      </v-row>
    </template>

    <template #item.actions="{}">
      <rule-btn small color="default" icon="mdi-trash-can" />
    </template>
  </tool-paginated-table>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import { getUser } from "@req/apis/base/table";
import {
  RegisterBtn,
  RegisterCard,
  RegisterForm,
  RegisterTable,
} from "@cps/the-mixins";

@Meta({ title: "Task Type", order: 100 })
@Component({
  name: "TaskType",
})
export default class TaskType extends Mixins(
  RegisterForm,
  RegisterBtn,
  RegisterCard,
  RegisterTable
) {
  items = [];

  taskTypeHeaders = [
    { text: "task type", value: "name", sortable: false, width: "100px" },
    { text: "comment", value: "describtion" },
    { text: "groups", value: "sex" },
    { text: "actions", value: "actions" },
  ];

  getTaskTypes = getUser;

  taskTypeSearch(): void {
    console.log("enter");
  }
}
</script>

<style scoped />
