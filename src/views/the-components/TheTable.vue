<template>
  <div class="the-table pa-0">
    <rule-card-table :title="'数据表格'">sd</rule-card-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";

@Meta({
  title: "表格",
  icon: "mdi-table-large",
  color: "pink",
  order: 5,
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
