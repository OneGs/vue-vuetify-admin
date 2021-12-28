<template>
  <v-list class="horizontal-menu">
    <v-menu
      offset-y
      :close-on-content-click="closeOnClick"
      v-for="(menu, index) in menus"
      :key="menuKey(menu) + index"
    >
      <template #activator="{ on, attrs }">
        <v-list-item
          v-bind="attrs"
          v-on="on"
          class="menu-base"
          :style="{ color: color }"
        >
          {{ menuTitle(menu) }}
        </v-list-item>
      </template>

      <menu-item
        v-for="(child, index) in menu.children"
        :key="menuKey(child) + index + 'subMenu'"
        :item="child"
        class="menu-white"
        @click="clickMenu"
      />
    </v-menu>
  </v-list>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import { RouteConfig } from "vue-router";
import MenuTools from "./menuTools";
import MenuItem from "./components/MenuItem.vue";

@Component({
  name: "Horizontal",
  components: { MenuItem },
})
export default class Horizontal extends Mixins(MenuTools) {
  @Prop({ type: String, default: "black" }) color?: string;

  @Prop({ type: Array, default: () => [] }) readonly menu?: RouteConfig[];

  closeOnClick = false;

  get menus(): RouteConfig[] {
    return this.filter(this.menu || []);
  }

  clickMenu(): void {
    this.closeOnClick = true;

    setTimeout(() => {
      this.closeOnClick = false;
    });
  }
}
</script>

<style scoped lang="scss">
.horizontal-menu {
  overflow: hidden;

  .menu-base {
    padding: 0 2rem;
    text-align: center;
    float: left;
  }
}

.menu-white {
  background: #ffffff;
}
</style>
