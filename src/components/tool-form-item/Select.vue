<template>
  <!--TODO 多选情况下，选择框高度无法自适应-->
  <validation-provider :name="_label" :rules="rules" #default="{ errors }">
    <v-select
      outlined
      solo
      flat
      :items="options"
      item-text="label"
      item-value="value"
      :height="height"
      :placeholder="_placeholder"
      :hide-details="inlineHideDetails"
      :error-messages="errors[0]"
      v-bind="$attrs"
      v-on="$listeners"
      clearable
      v-model="modeValue"
    />
  </validation-provider>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Input from "./mixins/input";
import MOptions from "@cps/tool-form-item/mixins/options";

@Component({
  name: "RuleSelect",
})
export default class RuleSelect extends Mixins(Input, MOptions) {}
</script>

<style scoped></style>
