<template>
  <v-select
    outlined
    solo
    flat
    dense
    :items="options"
    item-text="label"
    item-value="value"
    :label="label"
  />
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Input from "./mixins/input";
import MOptions from "@/components/tool-form-item/src/mixins/options";

@Component({
  name: "RuleSelect",
})
export default class RuleFormSelect extends Mixins(Input, MOptions) {}
</script>

<style scoped></style>
