<template>
  <router-view />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";

@Meta({
  title: "Forms",
  order: 30,
  icon: "mdi-form-select",
  color: "orange",
})
@Component
export default class TheComponentLayout extends Vue {
  a: { name: string; sex: string }[] = [];
}
</script>

<style scoped></style>
