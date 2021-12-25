<template>
  <router-view />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({ hidden: true })
@Component({
  name: "TheLogin",
})
export default class TheLogin extends Vue {}
</script>

<style scoped></style>
