<template>
  <v-radio-group v-model="modeValue" v-bind="$attrs" v-on="$listeners">
    <v-radio
      v-for="opt in options"
      :key="opt.label + opt.value"
      :label="opt.label"
      :value="opt.value"
    />
  </v-radio-group>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Input from "@cps/tool-form-item/mixins/input";
import MOptions from "@cps/tool-form-item/mixins/options";

@Component({
  name: "RuleRadio",
})
export default class RuleRadio extends Mixins(Input, MOptions) {}
</script>

<style scoped></style>
