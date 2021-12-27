<template>
  <v-text-field solo outlined flat dense :label="label" class="text-filed" />
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Input from "./mixins/input";

@Component({
  name: "ToolTextField",
})
export default class ToolTextField extends Mixins(Input) {}
</script>

<style scoped lang="scss">
.text-filed {
  box-shadow: none;
}
</style>
