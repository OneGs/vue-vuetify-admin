<template>
  <v-text-field
    solo
    outlined
    flat
    dense
    :label="_label"
    class="text-filed"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import Input from "./mixins/input";

@Component({
  name: "ToolTextField",
  inheritAttrs: false,
})
export default class ToolTextField extends Mixins(Input) {
  @Prop({ type: Boolean, default: false }) noMessage?: boolean;

  removeTextMessage(): void {
    if (!this.noMessage) return;

    const textMessage = this.$el.querySelector(".v-text-field__details");

    if (!textMessage) return;

    textMessage.parentElement?.removeChild(textMessage);
  }

  updated(): void {
    this.removeTextMessage();
  }

  mounted(): void {
    this.removeTextMessage();
  }
}
</script>

<style scoped lang="scss">
.text-filed {
  box-shadow: none;
}
</style>
