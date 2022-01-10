<template>
  <rule-card-template>
    <template #text-outer>
      <v-img :src="_image" alt="error" height="258px" contain />
    </template>

    <v-list>
      <div
        v-for="(item, index) in listItem.slice(0, 3)"
        :key="item.label + index"
      >
        <v-list-item class="font-size-root text-muted">{{
          item.label
        }}</v-list-item>
        <v-divider />
      </div>
    </v-list>

    <v-card-title class="py-4 px-0">
      <rule-title-h3>{{ title }}</rule-title-h3>
    </v-card-title>

    <slot name="body" v-if="!!message || $slots.body">
      <p>
        {{ message }}
      </p>
    </slot>

    <div class="text-left">
      <rule-btn color="primary" @click="$emit('click')">Go somewhere</rule-btn>
    </div>
  </rule-card-template>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import { RegisterBtn, RegisterCard, RegisterHeading } from "@cps/the-mixins";
import { LoopAny } from "@/types/common";

const lists = [
  { label: "Cras justo odio" },
  { label: "Dapibus ac facilisis in" },
  { label: "Vestibulum at eros" },
];

@Component({
  name: "CardDescribeMore",
})
export default class CardDescribeMore extends Mixins(
  RegisterBtn,
  RegisterCard,
  RegisterHeading
) {
  @Prop({ type: String, default: "Card Title" }) title!: string;

  @Prop({ type: String, default: "questions" })
  image!: string;

  @Prop({ type: String, default: null }) message!: string;

  @Prop({ type: Array, default: () => [...lists] }) listItem!: Array<LoopAny>;

  get _image(): string {
    if (/^http/.test(this.image)) return this.image;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require(`@/assets/illustrations/${this.image.replace(
      ".svg",
      ""
    )}.svg`);

    // return ;
  }
}
</script>

<style scoped></style>
