<template>
  <div>priority manager</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({
  title: "Priority Manager",
  order: 10,
})
@Component
export default class TheComponentLayout extends Vue {}
</script>

<style scoped></style>
