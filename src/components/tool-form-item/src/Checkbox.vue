<template>
  <div>
    <template v-for="option in options">
      <v-checkbox
        :label="option.label"
        :value="option.value"
        :key="option.label + option.value"
        :class="{ 'check-inline': inline }"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import Input from "./mixins/input";
import MOptions from "./mixins/options";

@Component({
  name: "RuleCheckbox",
})
export default class RuleCheckbox extends Mixins(Input, MOptions) {
  @Prop({ type: Boolean, default: false }) inline?: boolean;
}
</script>

<style scoped lang="scss">
.check-inline {
  display: inline-block;
  margin-left: 12px;

  &:first-child {
    margin-left: 0;
  }
}
</style>
