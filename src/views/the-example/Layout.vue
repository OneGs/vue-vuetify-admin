<template>
  <router-view />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";

@Meta({
  title: "examples",
  order: 50,
  icon: "mdi-checkbox-multiple-blank-outline",
  color: "red",
})
@Component
export default class TheExampleLayout extends Vue {}
</script>

<style scoped></style>
