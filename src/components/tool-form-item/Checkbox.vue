<template>
  <validation-provider :name="_label" :rules="rules" #default="{ errors }">
    <div>
      <v-checkbox
        v-for="option in options"
        :placeholder="option.label"
        :value="option.value"
        :label="option.label"
        :key="option.label + option.value"
        :class="{ inline: inline }"
        :hide-details="inline || inlineHideDetails"
        :error-messages="errors[0]"
        v-on="$listeners"
        v-model="modeValue"
        v-bind="$attrs"
        :ripple="false"
      />
    </div>
  </validation-provider>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import Input from "./mixins/input";
import MOptions from "./mixins/options";

@Component({
  name: "RuleCheckbox",
})
export default class RuleCheckbox extends Mixins(Input, MOptions) {
  @Prop({ type: Boolean, default: false }) inline!: boolean;
}
</script>
