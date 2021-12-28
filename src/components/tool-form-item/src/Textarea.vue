<template>
  <v-textarea solo dense outlined flat :label="label" />
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Input from "./mixins/input";

@Component({
  name: "ToolTextarea",
})
export default class ToolTextarea extends Mixins(Input) {}
</script>

<style scoped></style>
