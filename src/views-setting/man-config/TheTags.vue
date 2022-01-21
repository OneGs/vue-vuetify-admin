<template>
  <div>tags manager</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";

@Meta({
  title: "Tags Manager",
  order: 10,
  icon: "mdi-tag-multiple",
  color: "teal",
})
@Component
export default class TheComponentLayout extends Vue {}
</script>

<style scoped></style>
