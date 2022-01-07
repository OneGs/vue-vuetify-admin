<template>
  <div>Validation</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";

@Meta({ title: "Validation", order: 80 })
@Component({
  name: "FormValidation",
})
export default class FormValidation extends Vue {}
</script>

<style scoped></style>
