<template>
  <v-row>
    <v-col cols="8" class="mx-auto pt-0">
      <v-card class="card-shadow">
        <v-card-title class="card-heading-padding">
          <h3 class="text-h3 text-typo font-weight-600">Styles</h3>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <rule-btn color="primary">button</rule-btn>
          <rule-btn color="primary" class="ml-2">
            <v-icon left>mdi-format-paint</v-icon>
            With icon</rule-btn
          >
          <rule-btn color="primary" class="ml-2">
            <v-icon dense>mdi-cog-outline</v-icon>
          </rule-btn>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="8" class="mx-auto">
      <v-card class="card-shadow">
        <v-card-title class="card-heading-padding">
          <h3 class="text-h3 text-typo">Colors</h3>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <rule-btn
            :color="color"
            v-for="color in preset"
            :key="color"
            class="mr-2 my-2"
            >{{ color }}</rule-btn
          >
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="8" class="mx-auto">
      <v-card class="card-shadow">
        <v-card-title class="card-heading-padding">
          <h3 class="text-h3 text-typo">Outline</h3>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <rule-btn
            :color="color"
            v-for="color in preset"
            :key="color"
            outlined
            class="my-2 me-2"
            >{{ color }}</rule-btn
          >
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="8" class="mx-auto">
      <v-card class="card-shadow">
        <v-card-title class="card-heading-padding">
          <h3 class="text-h3 text-typo">Sizes</h3>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <rule-btn large>Large Button</rule-btn>
          <rule-btn class="ml-2" large color="secondary">Large Button</rule-btn>

          <v-divider class="my-8" />

          <rule-btn small>small Button</rule-btn>
          <rule-btn class="ml-2" small color="secondary">small Button</rule-btn>

          <v-divider class="my-8" />

          <rule-btn large block>block button</rule-btn>

          <rule-btn class="mt-2" color="secondary" large block
            >block button</rule-btn
          >
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="8" class="mx-auto">
      <v-card class="card-shadow">
        <v-card-title class="card-heading-padding">
          <h3 class="text-h3 text-typo">Group</h3>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <v-btn-toggle tile borderless>
            <v-btn value="left" :ripple="false"> Left </v-btn>

            <v-btn value="center" :ripple="false"> Center </v-btn>

            <v-btn value="right" :ripple="false"> Right </v-btn>

            <v-btn value="justify" :ripple="false"> Justify </v-btn>
          </v-btn-toggle>

          <v-divider class="my-8" />

          <v-btn-toggle borderless>
            <rule-btn color="default"> Left </rule-btn>

            <rule-btn color="default"> Center </rule-btn>

            <rule-btn color="default"> Right </rule-btn>

            <rule-btn :ripple="false" color="default"> Justify </rule-btn>
          </v-btn-toggle>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import { RegisterBtn } from "@cps/the-mixins";

@Meta({
  title: "Buttons",
  order: 101,
})
@Component({
  name: "TheButton",
})
export default class TheButton extends Mixins(RegisterBtn) {
  preset = [
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
    "default",
  ];
}
</script>

<style scoped lang="scss">
.btn {
  &:not(:first-child) {
    margin-left: 12px;
  }
}
</style>
