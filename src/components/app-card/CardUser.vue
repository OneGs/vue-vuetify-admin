<template>
  <rule-card-template class="position-relative">
    <template #text-outer>
      <v-img
        :src="backgroundImage"
        :lazy-src="backgroundImage"
        alt="error"
        height="258px"
      />

      <div class="position-relative">
        <v-avatar class="avatar-user" height="140px" width="140px">
          <v-img :src="avatar" />
        </v-avatar>
      </div>

      <div class="card-padding text-center">
        <div class="d-flex justify-space-between">
          <rule-btn color="info" x-small :ripple="false">Connect</rule-btn>
          <rule-btn color="default" x-small :ripple="false">Message</rule-btn>
        </div>
      </div>
    </template>

    <!--    <v-row class="text-center d-flex justify-center" v-if="counts.length">-->
    <!--      <v-col-->
    <!--        cols-->
    <!--        class="col-auto"-->
    <!--        v-for="info in counts.slice(0, 4)"-->
    <!--        :key="info.text + info.count"-->
    <!--      >-->
    <!--        <rule-title-h3>{{ info.count }}</rule-title-h3>-->
    <!--        <div class="text-body-2 text-muted">{{ info.text }}</div>-->
    <!--      </v-col>-->
    <!--    </v-row>-->

    <div class="text-center mt-4">
      <div class="text-h3 text-typo font-weight-semibold mb-2">
        <span>{{ name }}</span
        >, <span class="font-weight-light">24</span>
      </div>

      <div class="text-h5 text-typo font-weight-light">
        <span>{{ address }}</span>
      </div>

      <slot />
    </div>
  </rule-card-template>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from "vue-property-decorator";
import {
  CommonImage,
  RegisterBtn,
  RegisterCard,
  RegisterHeading,
} from "@cps/the-mixins";

@Component({
  name: "CardUser",
})
export default class CardUser extends Mixins(
  RegisterBtn,
  CommonImage,
  RegisterCard,
  RegisterHeading
) {
  @Prop({ type: String, default: "Card Title" }) title!: string;

  @Prop({ type: String, default: "nothing" }) message!: string;

  @Prop({ type: String, default: "Bucharest Romania" }) address!: string;

  @Prop({ type: String, default: "Jessica Jones" }) name!: string;

  @Prop({ type: Number, default: 24 }) age!: number;

  @Prop({ type: String, default: null, required: true }) avatar!: string;

  @Prop({
    type: Array,
    default: () => [
      { text: "Friends", count: 120 },
      { text: "Photo", count: 2000 },
      { text: "comments", count: 2100 },
    ],
  })
  counts!: string;
}
</script>

<style scoped lang="scss">
.avatar-user {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(-50%) scale(1);
  border: 3px solid #fff;
}
</style>
