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

    <div class="btn-search" :class="{ 'btn-width': extend }">
      <rule-text-field
        :hide-details="true"
        rounded
        label="search"
        prepend-inner-icon="mdi-magnify"
        @focus="extendWidth"
        @blur="rollupWidth"
      />
    </div>

    <!--    <div class="flex-grow-1 ml-4">-->
    <!--      <horizontal-->
    <!--        :menu="routes"-->
    <!--        style="background: transparent !important"-->
    <!--        color="white"-->
    <!--      />-->
    <!--    </div>-->

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
import Horizontal from "@cps/app-menu/Horizontal.vue";
import { routes } from "@/router";
import { RegisterBtn, RegisterForm } from "@cps/the-mixins";

@Component({
  name: "appBar",

  components: { Horizontal },

  inheritAttrs: false,
})
export default class appBar extends Mixins(RegisterBtn, RegisterForm) {
  userAvatar = "";

  routes = routes[0].children;

  extend = false;

  extendWidth(): void {
    this.extend = true;
  }

  rollupWidth(): void {
    this.extend = false;
  }
}
</script>

<style scoped lang="scss">
.app-bar {
  color: white;
}
</style>

<style lang="scss">
.app-bar {
  .v-toolbar__content {
    width: 100%;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.08);
  }

  .btn-search {
    transition: width 0.25s ease;
    width: 300px;
  }

  .btn-width {
    width: 360px;
  }
}

.v-application .border-bottom {
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.08) !important;
  border-bottom-color: rgba(255, 255, 255, 0.08) !important;
}
</style>
