<template>
  <div>the sortable</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";

@Meta({ title: "Sortable", order: 80 })
@Component({
  name: "TheSortable",
})
export default class TheSortable extends Vue {}
</script>

<style scoped></style>
