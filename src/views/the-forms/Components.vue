<template>
  <div>components</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";

@Meta({ title: "Components", order: 90 })
@Component({
  name: "FormComponents",
})
export default class FormComponents extends Vue {}
</script>

<style scoped></style>
