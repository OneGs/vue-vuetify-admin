<template>
  <!--TODO 多选情况下，选择框高度无法自适应-->
  <v-select
    outlined
    solo
    flat
    :items="options"
    item-text="label"
    item-value="value"
    hide-details
    :height="height"
    :placeholder="_label"
    v-bind="$attrs"
    clearable
    v-model="modeValue"
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
