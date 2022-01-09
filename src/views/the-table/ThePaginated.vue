<template>
  <tool-paginated-table
    title="Paginated table"
    :headers="headers"
    :items.sync="desserts2"
    :request-fun="getUsers"
  >
    <template #heading>
      <v-row>
        <v-col lg="3" cols="4" md="5" sm="6">
          <rule-text-field
            append-icon="mdi-magnify"
            class="text-search ml-4 text-body-1"
            placeholder="placeholder"
            width="100px"
            small
          />
        </v-col>
        <v-col class="text-right">
          <rule-btn
            icon="mdi-filter-menu-outline"
            small
            color="grey lighten-1"
          />
          <rule-btn icon="mdi-sort" small color="grey lighten-1" />
        </v-col>
      </v-row>
    </template>

    <template #top>
      <div class="text-right">
        <rule-btn small color="primary">额外操作</rule-btn>
      </div>
    </template>

    <template #item.describtion="{ item }">
      <div>{{ item.describtion.slice(0, 30) + "..." }}</div>
    </template>

    <template #item.sex="{ item }">
      <v-chip :color="getColor(item.sex)" dark small>
        {{ item.sex }}
      </v-chip>
    </template>

    <template #item.actions="{}">
      <rule-btn
        small
        class="mr-2"
        color="primary"
        icon="mdi-pencil"
        :dynamic="false"
      />
      <rule-btn small color="primary" icon="mdi-delete" :dynamic="false" />
    </template>
  </tool-paginated-table>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import { RegisterBtn, RegisterForm, RegisterTable } from "@cps/the-mixins";
import { getUser } from "@req/apis/base/table";

@Meta({ title: "Paginated Table", order: 70 })
@Component({
  name: "ThePaginated",
})
export default class ThePaginated extends Mixins(
  RegisterTable,
  RegisterForm,
  RegisterBtn
) {
  headers = [
    {
      text: "Account",
      sortable: false,
      value: "account",
    },
    { text: "Describtion", value: "describtion" },
    { text: "Name", value: "name" },
    { text: "Sex", value: "sex" },
    { text: "Actions", value: "actions" },
  ];

  desserts2 = [];

  getColor(calories: string): string {
    if (calories === "female") return "red";

    return "green";
  }

  getUsers = getUser;
}
</script>

<style scoped></style>
