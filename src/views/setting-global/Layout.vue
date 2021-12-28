<template>
  <router-view />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";

@Meta({ title: "配置" })
@Component({
  name: "SettingLayout",
})
export default class SettingLayout extends Vue {}
</script>

<style scoped></style>
