<template>
  <v-row>
    <v-col cols="8" class="mx-auto pt-0">
      <rule-card-template title="Styles">
        <rule-btn>button</rule-btn>
        <rule-btn class="ml-2">
          <v-icon left>mdi-format-paint</v-icon>
          With icon</rule-btn
        >
        <rule-btn class="ml-2">
          <v-icon dense>mdi-cog-outline</v-icon>
        </rule-btn>
      </rule-card-template>

      <rule-card-template title="Colors" class="mt-6">
        <rule-btn
          :color="color"
          v-for="color in preset"
          :key="color"
          class="mr-2 my-2"
          >{{ color }}</rule-btn
        >
      </rule-card-template>

      <rule-card-template title="outline" class="mt-6">
        <rule-btn
          :color="color"
          v-for="color in preset"
          :key="color"
          outlined
          class="my-2 me-2"
          >{{ color }}</rule-btn
        >
      </rule-card-template>

      <rule-card-template title="Sizes" class="mt-6">
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
      </rule-card-template>

      <rule-card-template title="group" class="mt-6">
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
      </rule-card-template>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import { RegisterBtn, RegisterCard } from "@cps/the-mixins";

@Meta({
  title: "Buttons",
  order: 101,
})
@Component({
  name: "TheButton",
})
export default class TheButton extends Mixins(RegisterBtn, RegisterCard) {
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
