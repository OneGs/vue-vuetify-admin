<template>
  <div>attr manager</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({
  title: "属性管理",
  order: 80,
})
@Component({
  name: "TheAttrs",
})
export default class TheAttrs extends Vue {}
</script>

<style scoped></style>
