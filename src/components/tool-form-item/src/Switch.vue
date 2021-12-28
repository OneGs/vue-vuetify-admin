<template>
  <v-switch dense inset v-bind="$attrs" :label="_label" />
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Input from "./mixins/input";
import MOptions from "./mixins/options";

@Component({
  name: "ToolSwitch",

  inheritAttrs: false,
})
export default class ToolSwitch extends Mixins(Input, MOptions) {}
</script>

<style scoped></style>
