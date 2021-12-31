<template>
  <v-row>
    <v-col cols="8" class="mx-auto">
      <v-card>
        <v-card-title>
          <h3 class="text-h3 text-typo">内容溢出</h3>
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
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({ title: "溢出 & 滚动条", icon: "mdi-clover", color: "orange", order: 9 })
@Component({
  name: "TheOverflow",
})
export default class TheOverflow extends Vue {}
</script>

<style scoped></style>
