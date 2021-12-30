<template>
  <v-list-item
    :link="isSub"
    v-if="!hasChildren"
    :class="{ 'nest-item': !menuToggle && isSub }"
    :to="item"
    v-on="$listeners"
  >
    <v-list-item-icon v-show="menuIcon(item)">
      <v-icon
        :color="!menuToggle ? menuColor(item) : 'black'"
        class="font-icon lighten-2"
        >{{ !menuToggle ? menuIcon(item) : menuTitle(item)[0] }}</v-icon
      >
    </v-list-item-icon>

    <v-list-item-title>{{ menuTitle(item) }}</v-list-item-title>
  </v-list-item>

  <v-list-group v-else :sub-group="isSub">
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
  @Prop({ type: Object, default: () => ({}) }) item?: RouteConfig;

  @Prop({ type: Boolean, default: false }) isSub?: boolean;

  @Inject("menu") menu?: AppMenu;

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

<style scoped lang="scss">
.nest-item {
  padding-left: 32px;
}

.font-icon {
  font-size: 16px !important;
  font-style: normal;
}
</style>
