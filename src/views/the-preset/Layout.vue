<template>
  <router-view />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";

@Meta({
  title: "预设",
  order: 10,
  icon: "mdi-presentation",
  color: "red lighten-2",
})
@Component
export default class ZDevLayout extends Vue {}
</script>

<style scoped></style>
