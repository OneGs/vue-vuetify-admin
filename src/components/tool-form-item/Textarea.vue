<template>
  <v-textarea
    solo
    outlined
    flat
    :placeholder="_label"
    height="76px"
    hide-details
  />
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Input from "./mixins/input";

@Component({
  name: "RuleTextarea",
})
export default class RuleTextarea extends Mixins(Input) {}
</script>

<style scoped></style>
