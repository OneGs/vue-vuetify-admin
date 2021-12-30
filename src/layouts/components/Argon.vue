<template>
  <v-app class="app">
    <app-bar app />

    <app-navigator app />

    <!-- 根据应用组件来调整你的内容 -->
    <v-main>
      <div class="transform-origin: center top;">
        <v-container
          fluid
          class="bg-primary pt-0 px-6 pb-16 d-flex align-center"
        >
          <rule-btn icon="mdi-home" color="#fff" class="mr-3" />

          <v-breadcrumbs :items="items" divider="-" large class="px-0" />
        </v-container>
      </div>
      <!-- 给应用提供合适的间距 -->
      <v-container fluid id="container" class="rounded-sm pt-0 px-6 mt-n16">
        <!-- 如果使用 vue-router -->
        <v-slide-x-reverse-transition mode="out-in" style="z-index: 10">
          <router-view />
        </v-slide-x-reverse-transition>
      </v-container>
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
  name: "Argon",

  components: { AppFooter, AppNavigator, AppBar },
})
export default class Argon extends Vue {
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

<style lang="scss">
@import "/src/styles/variables";

.app {
  background: $--background-color !important;

  .v-breadcrumbs__item {
    font-weight: 600;
  }

  .theme--light {
    .v-breadcrumbs__item,
    .v-breadcrumbs__divider {
      color: white;
    }
  }
}
</style>
