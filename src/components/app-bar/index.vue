<template>
  <v-app-bar
    v-bind="$attrs"
    color="primary"
    flat
    height="84px"
    class="app-bar d-flex justify-space-between border-bottom"
    :style="[
      {
        left: $store.state.layout.miniVariant
          ? $config.navigatorMiniVariantWidth
          : $store.state.layout.isHover
          ? $config.navigatorMiniVariantWidth
          : $config.navigatorWidth,
      },
    ]"
  >
    <v-img
      v-if="false"
      src="@/assets/logo.png"
      width="46"
      height="46"
      contain
      class="flex-grow-0"
    />

    <div class="flex-grow-1 d-flex align-center flex-row-reverse">
      <div class="d-flex align-center">
        <v-avatar size="36" class="lighten-1">
          <v-img lazy-src="@/assets/user.png" :src="userAvatar" />
        </v-avatar>
        <span
          class="ml-1"
          style="
            width: 50px;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #fff !important;
          "
          >welcome</span
        >
      </div>

      <div class="mr-2">
        <rule-btn icon="mdi-magnify" color="#fff" class="mr-3" />
        <rule-btn icon="mdi-bell" color="#fff" class="mr-3" />
        <rule-btn icon="mdi-cog-outline" color="#fff" class="mr-3" />
      </div>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { routes } from "@/router";
import { RegisterBtn, RegisterForm } from "@cps/the-mixins";
import { RouteConfig } from "vue-router";

@Component({
  name: "appBar",

  inheritAttrs: false,
})
export default class appBar extends Mixins(RegisterBtn, RegisterForm) {
  currentName = "";

  userAvatar = "";

  get horizontalMenu(): RouteConfig[] {
    return (
      routes
        .filter((route) => {
          return route.name?.includes("RootLayout");
        })
        ?.filter((menu) => {
          return menu.meta?.hidden !== true;
        })
        ?.sort((f, s) => {
          const [{ order: fOrder = -Infinity }, { order: sOrder = -Infinity }] =
            [f.meta || {}, s.meta || {}];

          return sOrder - fOrder;
        }) || []
    );
  }

  changeMenu(name: string): void {
    if (name !== this.currentName) {
      this.currentName = name;

      const menu = routes.filter((route) => {
        return route.name === name;
      });

      if (!menu[0]) return;

      this.$store.commit("menus/setMenus", menu[0].children || []);
    }
  }
}
</script>

<style lang="scss">
.app-bar {
  color: white;

  .v-toolbar__content {
    width: 100%;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.08);
  }
}

.v-application .border-bottom {
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.08) !important;
  border-bottom-color: rgba(255, 255, 255, 0.08) !important;
}
</style>
