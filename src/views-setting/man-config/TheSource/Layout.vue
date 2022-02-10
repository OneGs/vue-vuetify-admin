<template>
  <router-view />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";

@Meta({
  title: "数据管理",
  order: 10,
})
@Component
export default class TheComponentLayout extends Vue {}
</script>
