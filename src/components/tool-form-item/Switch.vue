<template>
  <v-switch inset v-bind="$attrs" :placeholder="_label" hide-details />
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Input from "./mixins/input";
import MOptions from "./mixins/options";

@Component({
  name: "RuleSwitch",

  inheritAttrs: false,
})
export default class RuleSwitch extends Mixins(Input, MOptions) {}
</script>

<style scoped></style>
