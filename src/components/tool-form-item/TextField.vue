<template>
  <v-text-field
    solo
    outlined
    flat
    hide-details
    :placeholder="_label"
    class="text-filed"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import { Component, Mixins, Prop, Inject } from "vue-property-decorator";
import Input from "./mixins/input";
import ToolForm from "@/cps/tool-form/index.vue";

@Component({
  name: "RuleTextField",

  inheritAttrs: false,
})
export default class RuleTextField extends Mixins(Input) {
  @Prop({ type: Boolean, default: false }) noMessage!: boolean;

  @Inject({ default: "" }) form!: ToolForm;
}
</script>

<style scoped lang="scss">
.text-filed {
  box-shadow: none;
}
</style>
