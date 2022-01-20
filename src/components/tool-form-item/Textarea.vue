<template>
  <v-textarea
    solo
    outlined
    flat
    :placeholder="_label"
    height="76px"
    :hide-details="inlineHideDetails"
    v-model="modeValue"
  />
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Input from "./mixins/input";

@Component({
  name: "RuleTextarea",

  inheritAttrs: false,
})
export default class RuleTextarea extends Mixins(Input) {}
</script>

<style scoped></style>
