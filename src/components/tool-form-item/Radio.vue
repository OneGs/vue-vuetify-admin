<template>
  <validation-provider :name="_label" :rules="rules" #default="{ errors }">
    <v-radio-group
      v-model="modeValue"
      v-bind="$attrs"
      v-on="$listeners"
      :hide-details="inline || inlineHideDetails"
      :error-messages="errors[0]"
      :class="{ inline: inline }"
      class="tool-radio"
    >
      <v-radio
        v-for="opt in options"
        :key="opt.label + opt.value"
        :label="opt.label"
        :value="opt.value"
      />
    </v-radio-group>
  </validation-provider>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import Input from "@cps/tool-form-item/mixins/input";
import MOptions from "@cps/tool-form-item/mixins/options";

@Component({
  name: "RuleRadio",
})
export default class RuleRadio extends Mixins(Input, MOptions) {
  @Prop({ type: Boolean, default: false }) inline!: boolean;
}
</script>

<style lang="scss">
.tool-radio {
  &.inline {
    .v-input--radio-group__input {
      flex-direction: row !important;
      align-items: center;
    }

    .v-radio {
      margin: 0 12px 0 0 !important;
    }
  }
}
</style>
