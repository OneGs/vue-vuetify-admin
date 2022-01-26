<template>
  <div>data manager</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({
  title: "数据管理",
  order: 70,
})
@Component({
  name: "TheData",
})
export default class TheData extends Vue {}
</script>

<style scoped></style>
