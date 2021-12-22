<template>
  <v-app>
    <app-bar app />

    <!-- 根据应用组件来调整你的内容 -->
    <v-main class="flex">
      <app-navigator />

      <!-- 给应用提供合适的间距 -->
      <v-container fluid>
        <!-- 如果使用 vue-router -->
        <router-view />
      </v-container>
    </v-main>

    <app-footer app v-if="false" />
  </v-app>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { RouteName } from "ea-router";
import AppBar from "@cps/app-bar/index.vue";
import AppNavigator from "@cps/app-navigator/index.vue";
import AppFooter from "@cps/app-footer/index.vue";

@RouteName("Layout")
@Component({
  name: "Layout",
  components: { AppFooter, AppNavigator, AppBar },
})
export default class Layout extends Vue {}
</script>

<style scoped></style>
