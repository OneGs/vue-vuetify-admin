<template>
  <v-switch
    inset
    dense
    :ripple="false"
    v-bind="$attrs"
    v-on="$listeners"
    v-model="modeValue"
    :placeholder="_label"
    hide-details
    class="mt-0"
  />
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
