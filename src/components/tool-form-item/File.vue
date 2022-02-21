<template>
  <validation-provider :name="_label" :rules="rules" #default="{ errors }">
    <v-file-input
      solo
      flat
      outlined
      :height="height"
      v-model="modeValue"
      :hide-details="inlineHideDetails"
      :error-messages="errors[0]"
      append-icon="mdi-eye-refresh"
      prepend-inner-icon="mdi-file"
      prepend-icon=""
      :placeholder="_label"
      @click:append="views"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </validation-provider>
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
