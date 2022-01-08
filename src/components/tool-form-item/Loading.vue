<template>
  <v-text-field
    color="primary darken"
    label="Text field"
    placeholder="Start typing..."
    loading
    readonly
    v-on="$listeners"
    v-bind="$attrs"
    :hide-details="hideDetails"
    :height="height"
  />
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Input from "@cps/tool-form-item/mixins/input";

@Component({
  name: "Loading",
})
export default class Loading extends Mixins(Input) {
  mounted(): void {
    this.$el.setAttribute("style", "padding: 12px 0 !important");

    const ele = this.$el.querySelector(".v-text-field__slot");

    ele?.parentElement?.removeChild(ele);

    const inputSlot = this.$el.querySelector(".v-input__slot");

    inputSlot?.setAttribute("style", "height: 0px;");
  }
}
</script>

<style scoped></style>
