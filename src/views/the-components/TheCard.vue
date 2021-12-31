<template>
  <div>this is TheCard</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";

@Meta({ title: "面板" })
@Component({
  name: "TheCard",
})
export default class TheCard extends Vue {}
</script>

<style scoped></style>
