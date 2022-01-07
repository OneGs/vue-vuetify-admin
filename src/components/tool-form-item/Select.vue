<template>
  <v-select
    outlined
    solo
    flat
    dense
    :items="options"
    item-text="label"
    item-value="value"
    :placeholder="_label"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Input from "./mixins/input";
import MOptions from "@cps/tool-form-item/mixins/options";

@Component({
  name: "RuleSelect",
})
export default class RuleSelect extends Mixins(Input, MOptions) {}
</script>

<style scoped></style>
