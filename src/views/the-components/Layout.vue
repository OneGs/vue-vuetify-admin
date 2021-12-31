<template>
  <router-view />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";

@Meta({
  title: "组件",
  order: 10,
  icon: "mdi-google-podcast",
  color: "green",
})
@Component
export default class TheComponentLayout extends Vue {}
</script>

<style scoped></style>
