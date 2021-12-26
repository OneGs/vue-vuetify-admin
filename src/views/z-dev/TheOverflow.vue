<template>
  <div class="text-body-1">
    <rule-h1>内容溢出</rule-h1>

    <v-divider />

    <p v-for="index in 30" :key="index" style="text-align: center" class="mt-6">
      🎨 🎨 🎨 🎨 🎨 🎨 🎨 内容溢出 {{ index }}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({ title: "溢出 & 滚动条" })
@Component({
  name: "TheOverflow",
})
export default class TheOverflow extends Vue {}
</script>

<style scoped></style>
