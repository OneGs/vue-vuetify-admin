<template>
  <div>this is sd MianColor</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({ title: "主题配色", order: 10 })
@Component({
  name: "ThemeColor",
})
export default class ThemeColor extends Vue {}
</script>

<style scoped></style>
