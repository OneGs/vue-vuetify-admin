<template>
  <router-view />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";

@Meta({
  title: "看板",
  order: 100,
  icon: "mdi-wallet-travel",
  color: "blue",
})
@Component
export default class TheComponentLayout extends Vue {}
</script>

<style scoped></style>
