<template>
  <paginated-table
    title="Paginated table"
    :headers="headers"
    :items="desserts2"
    :page="20"
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

    <template #item.calories="{ item }">
      <v-chip :color="getColor(item.calories)" dark small>
        {{ item.calories }}
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
  </paginated-table>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import { RegisterBtn, RegisterForm, RegisterTable } from "@cps/the-mixins";
import PaginatedTable from "@cps/tool-table/PaginatedTable.vue";

@Meta({ title: "Paginated table", order: 70 })
@Component({
  name: "ThePaginated",
  components: { PaginatedTable },
})
export default class ThePaginated extends Mixins(
  RegisterTable,
  RegisterForm,
  RegisterBtn
) {
  headers = [
    {
      text: "Dessert (100g serving)",
      align: "start",
      sortable: false,
      value: "name",
      class: "text-center",
    },
    { text: "Calories", value: "calories" },
    { text: "Fat (g)", value: "fat" },
    { text: "Carbs (g)", value: "carbs" },
    { text: "Protein (g)", value: "protein" },
    { text: "Iron (%)", value: "iron" },
    { text: "Actions", value: "actions", sortable: false },
  ];

  desserts2 = [
    {
      name: "Frozen Yogurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: "1%",
    },
    {
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: "1%",
    },
    {
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      iron: "7%",
    },
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      iron: "8%",
    },
    {
      name: "Gingerbread",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      iron: "16%",
    },
    {
      name: "Jelly bean",
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: "0%",
    },
    {
      name: "Lollipop",
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      iron: "2%",
    },
    {
      name: "Honeycomb",
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      iron: "45%",
    },
    {
      name: "Donut",
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      iron: "22%",
    },
    {
      name: "KitKat",
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      iron: "6%",
    },
  ];

  getColor(calories: number): string {
    if (calories > 400) return "red";
    else if (calories > 200) return "orange";
    else return "green";
  }
}
</script>

<style scoped></style>
