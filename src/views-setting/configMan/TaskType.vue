<template>
  <div>task type</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";

@Meta({ title: "Task Type", order: 100 })
@Component({
  name: "TaskType",
})
export default class TaskType extends Vue {}
</script>

<style scoped></style>
