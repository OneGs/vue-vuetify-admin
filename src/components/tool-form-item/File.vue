<template>
  <v-file-input
    solo
    flat
    outlined
    hide-details
    :height="height"
    append-icon="mdi-eye-refresh"
    :placeholder="_label"
    @click:append="views"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Input from "./mixins/input";

@Component({
  name: "RuleFile",
})
export default class RuleFile extends Mixins(Input) {
  views(): void {
    console.log("views");
  }
}
</script>

<style scoped></style>
