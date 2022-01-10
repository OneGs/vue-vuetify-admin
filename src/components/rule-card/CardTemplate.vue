<template>
  <v-card v-bind="$attrs" v-on="$listeners">
    <v-card-title class="card-heading-padding" v-if="title || $slots.title">
      <template>
        <slot name="title">
          <rule-title-h3 class="w-full">
            {{ title }}
          </rule-title-h3>
        </slot>
      </template>
    </v-card-title>

    <v-divider v-if="title || $slots.title" />

    <slot name="text-outer" />

    <v-card-text
      class="card-padding font-size-root lead font-weight-light text-body text-capitalize"
    >
      <slot />
    </v-card-text>

    <slot name="text-outer:append" />
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import RuleTitleH3 from "@cps/rule-title/H3.vue";

@Component({
  name: "CardTemplate",

  inheritAttrs: false,

  components: {
    RuleTitleH3,
  },
})
export default class CardTemplate extends Vue {
  @Prop({ type: String, default: null }) title!: string;
}
</script>

<style scoped></style>
