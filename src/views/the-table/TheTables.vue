<template>
  <div>tables</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";

@Meta({ title: "Table", order: 100 })
@Component({
  name: "TheTables",
})
export default class TheTables extends Vue {}
</script>

<style scoped></style>
