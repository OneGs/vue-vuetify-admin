<template>
  <v-row>
    <v-col cols="8" class="mx-auto pt-0">
      <v-card>
        <v-card-title>
          <rule-title-h3>Theme color</rule-title-h3>
        </v-card-title>

        <v-divider />

        <v-card-title>
          <rule-title-h3>light</rule-title-h3>
        </v-card-title>

        <v-card-text class="card-padding">
          <rule-btn
            v-for="item in preset"
            :key="item"
            :color="item"
            class="mr-2 my-2"
          >
            {{ item }}
          </rule-btn>
        </v-card-text>

        <v-divider />

        <v-card-title>
          <rule-title-h3>dark</rule-title-h3>
        </v-card-title>

        <v-card-text class="card-padding">
          <rule-btn
            v-for="item in preset"
            :key="item"
            :color="item"
            class="my-2 me-2"
          >
            {{ item }}
          </rule-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";
import { RegisterBtn, RegisterHeading } from "@cps/the-mixins";
import { deepClone, shadowClone } from "@uts/tools";

@Meta({
  title: "ThemeColor",
  order: 10,
  icon: "mdi-eyedropper-variant",
  color: "blue lighten-2",
})
@Component({
  name: "ThemeColor",
})
export default class ThemeColor extends Mixins(RegisterBtn, RegisterHeading) {
  preset = [
    "primary",
    "secondary",
    "accent",
    "error",
    "info",
    "success",
    "warning",
    "default",
  ];

  changeTheme(): void {
    const darkTheme = this.$vuetify.theme.dark;

    this.$vuetify.theme.dark = !darkTheme;
  }
}
</script>

<style scoped></style>
