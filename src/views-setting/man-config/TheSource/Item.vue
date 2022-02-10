<template>
  <div>
    <v-btn @click="$router.back()">click</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";

@Meta({ title: "数据项", hidden: true })
@Component({
  name: "SourceItem",
})
export default class SourceItem extends Vue {}
</script>

<style scoped></style>
