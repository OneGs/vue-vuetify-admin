<template>
  <v-app>
    <app-bar app />

    <!-- 根据应用组件来调整你的内容 -->
    <v-main>
      <app-navigator />

      <!-- 给应用提供合适的间距 -->
      <div id="container" class="layout-container">
        <!-- 如果使用 vue-router -->
        <v-slide-x-reverse-transition mode="out-in">
          <router-view class="router-view-bg p-4 rounded-sm min-100-pre" />
        </v-slide-x-reverse-transition>
      </div>
    </v-main>

    <app-footer app v-if="false" />
  </v-app>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import AppBar from "@cps/app-bar/index.vue";
import AppNavigator from "@cps/app-navigator/index.vue";
import AppFooter from "@cps/app-footer/index.vue";
import { RouteName } from "@/libs/auto-router";

@RouteName("RootLayout")
@Component({
  name: "Layout",
  components: { AppFooter, AppNavigator, AppBar },
})
export default class Layout extends Vue {}
</script>

<style scoped lang="scss">
.p-4 {
  padding: 16px;
}
</style>
