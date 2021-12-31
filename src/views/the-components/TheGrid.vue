<template>
  <div>this is grid</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";

@Meta({ title: "网格" })
@Component({
  name: "TheGrid",
})
export default class TheGrid extends Vue {}
</script>

<style scoped></style>
