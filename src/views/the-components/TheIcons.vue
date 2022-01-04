<template>
  <div>this is the icons</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";

@Meta({ title: "图标" })
@Component({
  name: "TheIcons",
})
export default class TheIcons extends Vue {}
</script>

<style scoped></style>
