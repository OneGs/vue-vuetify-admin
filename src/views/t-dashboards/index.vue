<template>
  <div>index</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";

@Meta({ title: "Dashboard" })
@Component({
  name: "DashboardsIndex",
})
export default class DashboardsIndex extends Vue {}
</script>

<style scoped></style>
