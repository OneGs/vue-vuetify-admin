<template>
  <keep-alive :include="cachedViews">
    <router-view :key="key" />
  </keep-alive>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import KeepAlive from "@/mixins/keepAlive";

@Meta({
  title: "配置中心",
  order: 10,
  icon: "mdi-cogs",
  color: "orange",
})
@Component
export default class TheComponentLayout extends Mixins(KeepAlive) {}
</script>
