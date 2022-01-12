<template>
  <v-list-item
    :link="isSub"
    v-if="!hasChildren"
    class="menu-item ma-0"
    :class="{ 'nest-item': !menuToggle && isSub }"
    :to="isSub ? item : ''"
    color="rgba(0,0,0,.87)"
    :ripple="false"
    v-on="$listeners"
  >
    <v-list-item-icon :class="[{ 'my-0': isSub }]">
      <div class="d-flex align-center w-full">
        <v-icon v-if="!isSub" :color="menuColor(item)" class="lighten-2">{{
          menuIcon(item)
        }}</v-icon>
        <div
          v-else
          style="line-height: 1.18"
          class="py-2 text-capitalize w-full text-center"
        >
          {{ menuToggle ? menuTitle(item)[0] : "" }}
        </div>
      </div>
    </v-list-item-icon>

    <v-list-item-title class="py-2 ml-2">{{
      menuTitle(item)
    }}</v-list-item-title>
  </v-list-item>

  <v-list-group v-else :sub-group="isSub" :ripple="false" v-model="menuGroup">
    <template #activator>
      <v-list-item-content class="py-2 ml-2">
        <v-list-item-title>{{ menuTitle(item) }}</v-list-item-title>
      </v-list-item-content>
    </template>

    <template #prependIcon v-if="menuIcon(item)">
      <v-icon
        v-text="menuIcon(item)"
        :color="menuColor(item)"
        class="lighten-2"
        dense
      />
    </template>

    <menu-item
      v-for="child in children"
      :key="menuKey(child)"
      :is-sub="true"
      :item="child"
    />
  </v-list-group>
</template>

<script lang="ts">
import { Component, Prop, Mixins, Inject, Watch } from "vue-property-decorator";
import { RouteConfig } from "vue-router";
import MenuTools from "../menuTools";
import AppMenu from "../Vertial.vue";

@Component({
  name: "MenuItem",
})
export default class MenuItem extends Mixins(MenuTools) {
  menuGroup = false;

  @Prop({ type: Object, default: () => ({}) }) item!: RouteConfig;

  @Prop({ type: Boolean, default: false }) isSub!: boolean;

  @Inject("menu") menu!: AppMenu;

  @Watch("menuGroup")
  setCurrentMenu(status: boolean): void {
    if (!status) return;

    this.menu.currentMenu = this.item.path;
  }

  get menuToggle(): boolean {
    return !!this.menu?.toggle;
  }

  get hasChildren(): boolean {
    return !!this.item?.children?.length;
  }

  get children(): RouteConfig[] {
    if (!this.item?.children) return [];

    return this.filter(this.item?.children);
  }

  created(): void {
    if (this.item.path === this.menu.currentMenu) {
      this.menuGroup = true;
    }
  }
}
</script>
