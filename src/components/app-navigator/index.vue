<template>
  <v-navigation-drawer
    v-bind="$attrs"
    class="app-navigator"
    :expand-on-hover="$store.state.layout.isHover"
    :mini-variant.sync="$store.state.layout.miniVariant"
    :mini-variant-width="$config.navigatorMiniVariantWidth"
    @transitionend="$store.commit('layout/setScaleIcon')"
    :width="$config.navigatorWidth"
  >
    <v-list-item style="height: 78px">
      <v-list-item-content v-if="!$store.state.layout.scaleIcon">
        <v-list-item-title class="text-h6"> Application </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>

      <rule-btn
        icon="mdi-menu"
        color="black"
        @click="$store.commit('layout/setHover')"
      />
    </v-list-item>

    <app-menu
      :menu="routes"
      :toggle="$store.state.layout.scaleIcon"
      v-model="currentMenu"
    />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Mixins, Watch } from "vue-property-decorator";
import AppMenu from "../app-menu/Vertial.vue";
import { RegisterBtn } from "@cps/the-mixins";
import { RouteConfig } from "vue-router";

@Component({
  name: "appNavigator",
  components: { AppMenu },
  inheritAttrs: false,
})
export default class appNavigator extends Mixins(RegisterBtn) {
  get routes(): RouteConfig[] {
    return this.$store.state.menus.menus;
  }

  currentMenu = sessionStorage.getItem("currentMenu") || "the-dashboards";

  @Watch("currentMenu")
  say(): void {
    sessionStorage.setItem("currentMenu", this.currentMenu);
  }
}
</script>
