<template>
  <v-list>
    <menu-item
      v-for="(menu, index) in menus"
      :key="menuKey(menu) + index"
      :item="menu"
    />
  </v-list>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import { RouteConfig } from "vue-router";
import MenuItem from "./components/MenuItem.vue";
import MenuTools from "./menuTools";

@Component({
  name: "AppMenu",

  components: { MenuItem },
})
export default class AppMenu extends Mixins(MenuTools) {
  @Prop({ type: Array, default: () => [] }) readonly menu?: RouteConfig[];

  get menus(): RouteConfig[] {
    return this.filter(this.menu || []);
  }

  menuKey(menu: RouteConfig): string {
    return menu.name || menu.path || menu.meta?.title;
  }
}
</script>

<style scoped></style>
