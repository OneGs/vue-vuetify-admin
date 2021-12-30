<template>
  <v-app class="text-color">
    <app-bar app />

    <!-- 根据应用组件来调整你的内容 -->
    <v-main>
      <app-navigator />

      <!-- 给应用提供合适的间距 -->
      <div id="container" class="layout-container">
        <v-breadcrumbs
          :items="items"
          divider="-"
          class="layout-bread px-0 pt-0"
        />
        <!-- 如果使用 vue-router -->
        <v-slide-x-reverse-transition mode="out-in" style="z-index: 10">
          <router-view class="router-view-bg pa-4 rounded-sm" />
        </v-slide-x-reverse-transition>
      </div>
    </v-main>

    <app-footer app v-if="false" />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppFooter from "@cps/app-footer/index.vue";
import AppNavigator from "@cps/app-navigator/index.vue";
import AppBar from "@cps/app-bar/index.vue";

@Component({
  name: "Moni",

  components: { AppFooter, AppNavigator, AppBar },
})
export default class Moni extends Vue {
  items = [
    {
      text: "Dashboard",
      disabled: false,
      href: "breadcrumbs_dashboard",
    },
    {
      text: "Link 1",
      disabled: false,
      href: "breadcrumbs_link_1",
    },
    {
      text: "Link 2",
      disabled: true,
      href: "breadcrumbs_link_2",
    },
  ];
}
</script>

<style scoped></style>
