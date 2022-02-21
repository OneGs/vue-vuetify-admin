<template>
  <validation-provider :name="_label" :rules="rules" #default="{ errors }">
    <v-textarea
      solo
      outlined
      flat
      :placeholder="_label"
      height="76px"
      :error-messages="errors[0]"
      :hide-details="inlineHideDetails"
      v-model="modeValue"
    />
  </validation-provider>
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
