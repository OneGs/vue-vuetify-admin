<template>
  <div>tags manager</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({
  title: "Tags Manager",
  order: 60,
})
@Component({
  name: "TheTags",
})
export default class TheTags extends Vue {}
</script>

<style scoped></style>
