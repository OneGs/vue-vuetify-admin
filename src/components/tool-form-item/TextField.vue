<template>
  <validation-provider :name="_label" :rules="rules" #default="{ errors }">
    <v-text-field
      solo
      outlined
      flat
      :hide-details="inlineHideDetails"
      :placeholder="_placeholder"
      :height="height"
      :error-messages="errors[0]"
      v-bind="$attrs"
      v-on="$listeners"
      v-model="modeValue"
    />
  </validation-provider>
</template>

<script lang="ts">
import Input from "./mixins/input";
import { Component, Mixins } from "vue-property-decorator";

@Component({
  name: "RuleTextField",
})
export default class RuleTextField extends Mixins(Input) {}
</script>
