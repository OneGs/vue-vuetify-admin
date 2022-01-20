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

        <v-col class="text-right d-flex justify-end">
          <task-type-edit />
        </v-col>
      </v-row>
    </template>

    <template #item.actions="{ item }">
      <div class="d-flex align-center">
        <task-type-edit :data="item">
          <rule-btn small color="default" icon="mdi-pencil" class="ml-n3" />
        </task-type-edit>

        <rule-dialog title="notify">
          <rule-btn small color="default" icon="mdi-trash-can" />

          <template #text>
            <div class="mb-4">
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
import { getUser } from "@req/apis/base/table";
import {
  RegisterBtn,
  RegisterCard,
  RegisterDialog,
  RegisterForm,
  RegisterTable,
} from "@cps/the-mixins";
import { AutoDataTableHeader } from "@cps/tool-form/autoRender";
import TaskGroups from "@/views-setting/configMan/components/TaskGroups.vue";
import TaskTypeEdit from "@/views-setting/configMan/components/TaskTypeEdit.vue";

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
      sortable: false,
      width: "100px",
      editable: true,
    },
    { text: "comment", value: "describtion" },
    {
      text: "groups",
      value: "sex",
      width: 100,
      editable: true,
      edit: {
        componentName: "RuleSelect",
        options: [
          { label: "man", value: 1 },
          { label: "female", value: 0 },
        ],
      },
    },
    { text: "actions", value: "actions", width: 130 },
  ];

  getTaskTypes = getUser;

  taskTypeSearch(): void {
    console.log("enter");
  }
}
</script>

<style scoped />
