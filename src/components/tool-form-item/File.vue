<template>
  <v-file-input
    solo
    flat
    outlined
    :height="height"
    :hide-details="inlineHideDetails"
    append-icon="mdi-eye-refresh"
    prepend-inner-icon="mdi-file"
    prepend-icon=""
    :placeholder="_label"
    @click:append="views"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Input from "./mixins/input";

@Component({
  name: "RuleFile",

  inheritAttrs: false,
})
export default class RuleFile extends Mixins(Input) {
  views(): void {
    console.log("views");
  }
}
</script>

<style scoped></style>
