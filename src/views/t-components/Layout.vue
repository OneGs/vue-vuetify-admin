<template>
  <router-view />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";

@Meta({
  title: "Components",
  order: 40,
  icon: "mdi-google-podcast",
  color: "cyan",
})
@Component
export default class TheComponentLayout extends Vue {}
</script>

<style scoped></style>
