<template>
  <div>priority manager</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({
  title: "Priority Manager",
  order: 50,
})
@Component({
  name: "ThePriority",
})
export default class ThePriority extends Vue {}
</script>

<style scoped></style>
