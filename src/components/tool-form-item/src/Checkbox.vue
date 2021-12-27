<template>
  <div>
    <template v-for="option in options">
      <v-checkbox
        :label="option.label"
        :value="option.value"
        :key="option.label + option.value"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Input from "./mixins/input";
import MOptions from "./mixins/options";

@Component({
  name: "RuleCheckbox",
})
export default class RuleCheckbox extends Mixins(Input, MOptions) {}
</script>

<style scoped></style>
