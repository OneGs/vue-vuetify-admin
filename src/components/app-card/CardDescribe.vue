<template>
  <rule-card-template :title="title">
    <slot name="body" v-if="!!message || $slots.body">
      <p>{{ message }}</p>
    </slot>

    <div class="text-left">
      <rule-btn color="primary">Go somewhere</rule-btn>
    </div>
  </rule-card-template>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from "vue-property-decorator";
import { RegisterBtn, RegisterCard } from "@cps/the-mixins";

@Component({
  name: "CardDescribe",
})
export default class CardDescribe extends Mixins(RegisterBtn, RegisterCard) {
  @Prop({ type: String, default: "Card Title" }) title!: string;

  @Prop({ type: String, default: "nothing" }) message!: string;
}
</script>

<style scoped></style>
