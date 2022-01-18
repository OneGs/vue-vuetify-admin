<template>
  <router-view />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";

@Meta({
  title: "Config Manager",
  order: 10,
  icon: "mdi-cogs",
  color: "orange",
})
@Component
export default class TheComponentLayout extends Vue {}
</script>

<style scoped></style>
