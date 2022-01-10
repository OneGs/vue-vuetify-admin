<template>
  <v-list-item
    :link="isSub"
    v-if="!hasChildren"
    class="menu-item"
    :class="{ 'nest-item': !menuToggle && isSub }"
    :to="item"
    color="rgba(0,0,0,.87)"
    :ripple="false"
    v-on="$listeners"
  >
    <v-list-item-icon :class="[{ 'my-0': isSub }]">
      <v-icon
        :color="isSub ? 'rgba(0,0,0,.6)' : menuColor(item)"
        class="font-icon lighten-2"
        >{{
          !menuToggle ? (isSub ? "" : menuIcon(item)) : menuTitle(item)[0]
        }}</v-icon
      >
    </v-list-item-icon>

    <v-list-item-title>{{ menuTitle(item) }}</v-list-item-title>
  </v-list-item>

  <v-list-group v-else :sub-group="isSub" :ripple="false">
    <template #activator>
      <v-list-item-content>
        <v-list-item-title>{{ menuTitle(item) }}</v-list-item-title>
      </v-list-item-content>
    </template>

    <template #prependIcon v-if="menuIcon(item)">
      <v-icon
        v-text="menuIcon(item)"
        :color="menuColor(item)"
        class="lighten-2 font-icon"
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
import { Component, Prop, Mixins, Inject } from "vue-property-decorator";
import { RouteConfig } from "vue-router";
import MenuTools from "../menuTools";
import AppMenu from "../Vertial.vue";

@Component({
  name: "MenuItem",
})
export default class MenuItem extends Mixins(MenuTools) {
  @Prop({ type: Object, default: () => ({}) }) item!: RouteConfig;

  @Prop({ type: Boolean, default: false }) isSub!: boolean;

  @Inject("menu") menu!: AppMenu;

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
}
</script>

<style lang="scss">
.nest-item {
  margin-bottom: 0 !important;

  &.menu-item {
    min-height: 36px !important;
    height: 20px !important;
  }

  .v-list-item__title {
    padding: 8px 0 !important;
  }
}
</style>
