<template>
  <div>this is the title</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({ title: "标题", order: 2 })
@Component({
  name: "TheTitle",
})
export default class TheTitle extends Vue {}
</script>

<style scoped></style>
