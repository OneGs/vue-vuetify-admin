<template>
  <v-list class="list vertical" nav flat>
    <menu-item
      v-for="(menu, index) in menus"
      :key="menuKey(menu) + index"
      :item="menu"
    />
  </v-list>
</template>

<script lang="ts">
import { Component, Mixins, Prop, VModel } from "vue-property-decorator";
import { RouteConfig } from "vue-router";
import MenuItem from "./components/MenuItem.vue";
import MenuTools from "./menuTools";

@Component({
  name: "AppMenu",

  components: { MenuItem },

  provide() {
    return {
      menu: this,
    };
  },
})
export default class AppMenu extends Mixins(MenuTools) {
  @Prop({ type: Array, default: () => [] }) readonly menu!: RouteConfig[];

  @Prop({ type: Boolean, default: () => false }) readonly toggle!: boolean;

  @VModel({ type: String }) currentMenu!: string;

  get menus(): RouteConfig[] {
    return this.filter(this.menu || []);
  }

  menuKey(menu: RouteConfig): string {
    return menu.name || menu.path || menu.meta?.title;
  }
}
</script>

<style lang="scss">
.vertical {
  .v-icon {
    font-size: 1rem !important;
    padding: 0 4px; // 图标居中
  }

  .v-list-item__title {
    font-size: 0.9rem;
  }
}
</style>
