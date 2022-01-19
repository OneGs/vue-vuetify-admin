<template>
  <tool-paginated-table
    :headers="taskGroupsHeaders"
    :request-fun="getTaskGroups"
    :items.sync="items"
  >
    <template #item.actions="{}">
      <rule-btn small color="default" icon="mdi-trash-can" class="ml-n3" />
      <rule-btn small color="default" icon="mdi-pencil" />
    </template>
  </tool-paginated-table>
</template>

<script>
import { Component, Mixins } from "vue-property-decorator";
import { RegisterBtn, RegisterTable } from "@cps/the-mixins";
import { getUser } from "@req/apis/base/table";

@Component({
  name: "TaskGroups",
})
export default class TaskGroups extends Mixins(RegisterTable, RegisterBtn) {
  items = [];

  taskGroupsHeaders = [
    { text: "IT", value: "name", sortable: false },
    { text: "actions", value: "actions", width: 130 },
  ];

  getTaskGroups = getUser;
}
</script>

<style scoped></style>
