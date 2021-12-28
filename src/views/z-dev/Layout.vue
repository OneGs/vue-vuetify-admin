<template>
  <router-view />
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({
  title: "预设",
  order: 10,
  icon: "mdi-clipboard-text-multiple-outline",
  color: "red lighten-2",
})
@Component
export default class ZDevLayout extends Vue {}
</script>

<style scoped></style>
