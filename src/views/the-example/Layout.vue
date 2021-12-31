<template>
  <router-view />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";

@Meta({
  title: "示例",
  order: 50,
  icon: "mdi-google-podcast",
  color: "green",
})
@Component
export default class TheExampleLayout extends Vue {}
</script>

<style scoped></style>
