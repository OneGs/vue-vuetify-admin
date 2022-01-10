<template>
  <v-text-field
    solo
    outlined
    flat
    hide-details
    :placeholder="_label"
    :height="height"
    class="text-filed"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Input from "./mixins/input";

@Component({
  name: "RuleTextField",

  inheritAttrs: false,
})
export default class RuleTextField extends Mixins(Input) {}
</script>

<style scoped lang="scss">
.text-filed {
  box-shadow: none;
}
</style>
