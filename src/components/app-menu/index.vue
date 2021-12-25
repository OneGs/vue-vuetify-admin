<template>
  <v-list>
    <menu-item v-for="menu in menus" :key="menuKey(menu)" :item="menu" />
  </v-list>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { routes } from "@/router";
import { RouteConfig } from "vue-router";
import MenuItem from "@/components/app-menu/components/MenuItem.vue";

@Component({
  name: "AppMenu",
  components: { MenuItem },
})
export default class AppMenu extends Vue {
  get menus(): RouteConfig[] {
    return routes[0].children || [];
  }

  menuKey(menu: RouteConfig): string {
    return menu.name || menu.path || menu.meta?.title;
  }

  created(): void {
    console.log(this.menus, "routes");
  }
}
</script>

<style scoped></style>
