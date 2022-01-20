<template>
  <tool-paginated-table
    :headers="taskGroupsHeaders"
    :request-fun="getTaskGroups"
    :items.sync="items"
    class="elevation-0"
  >
    <template #item.actions="{}">
      <rule-btn small color="default" icon="mdi-pencil" class="ml-n3" />
      <rule-btn small color="default" icon="mdi-trash-can" />
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
    { text: "actions", value: "actions", width: 100 },
  ];

  getTaskGroups = getUser;
}
</script>

<style scoped></style>
