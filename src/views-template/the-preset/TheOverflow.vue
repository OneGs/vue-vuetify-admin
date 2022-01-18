<template>
  <v-row>
    <v-col cols="8" class="mx-auto">
      <v-card>
        <v-card-title>
          <rule-title-h3>Overflow</rule-title-h3>
        </v-card-title>

        <v-divider />

        <v-card-text class="font-size-root text-typo">
          <p v-for="index in 30" :key="index" style="text-align: center">
            🎨 🎨 🎨 🎨 🎨 🎨 🎨 内容溢出 {{ index }}
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";
import { RegisterHeading } from "@cps/the-mixins";

@Meta({ title: "Overflow", icon: "mdi-clover", color: "orange", order: 9 })
@Component({
  name: "TheOverflow",
})
export default class TheOverflow extends Mixins(RegisterHeading) {}
</script>

<style scoped></style>
