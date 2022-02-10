<template>
  <v-app class="app">
    <div v-if="!isFullLayout">
      <app-bar app />

      <app-navigator app />

      <!-- 根据应用组件来调整你的内容 -->
      <v-main
        :style="[
          {
            paddingLeft: $store.state.layout.miniVariant
              ? $config.navigatorMiniVariantWidth
              : $store.state.layout.isHover
              ? $config.navigatorMiniVariantWidth
              : $config.navigatorWidth,
          },
        ]"
      >
        <v-container
          fluid
          class="primary pt-0 px-6"
          :style="{ paddingBottom: breadcrumbsPadding }"
        >
          <app-breadcrumbs class="px-0" style="height: 80px" />
        </v-container>
        <!-- 给应用提供合适的间距 -->
        <v-container
          fluid
          id="container"
          class="rounded-sm pt-0 px-6"
          :style="{ marginTop: `-${breadcrumbsPadding}` }"
        >
          <!-- 如果使用 vue-router -->
          <!--          <v-slide-x-reverse-transition mode="out-in" style="z-index: 10">-->
          <router-view />
          <!--          </v-slide-x-reverse-transition>-->
        </v-container>
      </v-main>

      <app-footer app v-if="false" />
    </div>

    <router-view v-else />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import AppFooter from "@cps/app-footer/index.vue";
import AppNavigator from "@cps/app-navigator/index.vue";
import AppBar from "@cps/app-bar/index.vue";
import AppBreadcrumbs from "@cps/app-breadcrumbs/index.vue";

@Component({
  name: "Argon",

  components: { AppBreadcrumbs, AppFooter, AppNavigator, AppBar },

  provide() {
    return {
      argon: this,
    };
  },
})
export default class Argon extends Vue {
  breadcrumbsPadding = "64px";

  @Watch("$route")
  setBreadcrumbsPadding(): void {
    this.breadcrumbsPadding = "64px";
  }

  get isFullLayout(): boolean {
    const { meta } = this.$route;

    return !!meta?.full;
  }
}
</script>

<style lang="scss">
.app {
  background: #f8f9fe !important;

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
