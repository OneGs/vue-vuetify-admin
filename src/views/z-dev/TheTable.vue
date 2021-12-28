<template>
  <div class="the-table pa-0">
    <v-card>
      <v-card-title>
        <rule-h1>简单表格</rule-h1>
      </v-card-title>

      <v-divider />

      <v-simple-table class="pa-4 text-body-1">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";

@Meta({
  title: "表格",
  order: 9,
  icon: "mdi-table-large",
  color: "pink",
})
@Component({
  name: "TheTable",
})
export default class TheTable extends Vue {
  desserts = [
    {
      name: "Frozen Yogurt",
      calories: 159,
    },
    {
      name: "Ice cream sandwich",
      calories: 237,
    },
    {
      name: "Eclair",
      calories: 262,
    },
    {
      name: "Cupcake",
      calories: 305,
    },
    {
      name: "Gingerbread",
      calories: 356,
    },
    {
      name: "Jelly bean",
      calories: 375,
    },
    {
      name: "Lollipop",
      calories: 392,
    },
    {
      name: "Honeycomb",
      calories: 408,
    },
    {
      name: "Donut",
      calories: 452,
    },
    {
      name: "KitKat",
      calories: 518,
    },
  ];
}
</script>

<style scoped></style>
