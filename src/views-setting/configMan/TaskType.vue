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
          <rule-dialog
            title="Creating a Task Type"
            @save="onSubmit"
            ref="taskTypeDialog"
          >
            <rule-btn small>add</rule-btn>

            <template #text>
              <tool-auto-render :mode="taskTypeModes" />
            </template>
          </rule-dialog>
        </v-col>
      </v-row>
    </template>

    <template #item.actions="{}">
      <rule-btn small color="default" icon="mdi-trash-can" class="ml-n3" />
      <rule-btn small color="default" icon="mdi-pencil" />
    </template>
  </tool-paginated-table>
</template>

<script lang="ts">
import { Component, Mixins, Ref } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import { getUser } from "@req/apis/base/table";
import {
  RegisterBtn,
  RegisterCard,
  RegisterDialog,
  RegisterForm,
  RegisterTable,
} from "@cps/the-mixins";
import { AutoRenderMode } from "@cps/tool-form/autoRender";
import RuleDialog from "@cps/rule-dailog/index.vue";

@Meta({ title: "Task Type", order: 100 })
@Component({
  name: "TaskType",
})
export default class TaskType extends Mixins(
  RegisterForm,
  RegisterBtn,
  RegisterCard,
  RegisterTable,
  RegisterDialog
) {
  items = [];

  taskTypeHeaders = [
    { text: "task type", value: "name", sortable: false, width: "100px" },
    { text: "comment", value: "describtion" },
    { text: "groups", value: "sex", width: 100 },
    { text: "actions", value: "actions", width: 130 },
  ];

  taskTypeModes: AutoRenderMode = {
    row: 3,
    col: 1,
    modes: [
      {
        label: "Type name",
        position: "0-0",
        componentName: "RuleTextField",
        rules: "required",
      },
      {
        label: "Type group",
        position: "1-0",
        componentName: "RuleSelect",
        options: [
          { label: "city", value: 1 },
          { label: "country", value: 2 },
          { label: "viliger", value: 3 },
        ],
      },
      {
        label: "note",
        position: "2-0",
        componentName: "RuleTextarea",
      },
    ],
  };

  @Ref() taskTypeDialog?: RuleDialog;

  getTaskTypes = getUser;

  taskTypeSearch(): void {
    console.log("enter");
  }

  onSubmit(validate: boolean): void {
    if (!validate) return;

    this.taskTypeDialog?.close();
  }
}
</script>

<style scoped />
