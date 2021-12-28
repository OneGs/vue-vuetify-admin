<template>
  <v-list-item
    :link="isSub"
    v-if="!hasChildren"
    :class="{ 'nest-item': isSub }"
    :to="item"
    v-on="$listeners"
  >
    <v-list-item-icon v-show="menuIcon(item)">
      <v-icon :color="menuColor(item)" class="font-icon lighten-2">{{
        menuIcon(item)
      }}</v-icon>
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
import { Component, Prop, Mixins } from "vue-property-decorator";
import { RouteConfig } from "vue-router";
import MenuTools from "../menuTools";

@Component({
  name: "MenuItem",
})
export default class MenuItem extends Mixins(MenuTools) {
  @Prop({ type: Object, default: () => ({}) }) item?: RouteConfig;

  @Prop({ type: Boolean, default: false }) isSub?: boolean;

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
}
</style>
