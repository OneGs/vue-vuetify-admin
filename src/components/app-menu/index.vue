<template>
  <v-list>
    <menu-item v-for="menu in menus" :key="menuKey(menu)" :item="menu" />
  </v-list>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { routes } from "@/router";
import { RouteConfig } from "vue-router";
import MenuItem from "@/components/app-menu/components/MenuItem.vue";
import MenuTools from "@/components/app-menu/menuTools";

@Component({
  name: "AppMenu",
  components: { MenuItem },
})
export default class AppMenu extends Mixins(MenuTools) {
  get menus(): RouteConfig[] {
    return this.filter(routes[0].children || []);
  }

  menuKey(menu: RouteConfig): string {
    return menu.name || menu.path || menu.meta?.title;
  }
}
</script>

<style scoped></style>
