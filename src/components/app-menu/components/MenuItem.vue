<template>
  <v-list-item
    link
    v-if="!hasChildren"
    :class="{ 'nest-item': isSub }"
    :to="item"
  >
    <v-list-item-icon v-show="menuIcon(item)">
      <v-icon>{{ menuIcon(item) }}</v-icon>
    </v-list-item-icon>

    <v-list-item-title>{{ menuTitle(item) }}</v-list-item-title>
  </v-list-item>

  <v-list-group v-else :prepend-icon="menuIcon(item)" :sub-group="isSub">
    <template #activator>
      <v-list-item-content>
        <v-list-item-title>{{ menuTitle(item) }}</v-list-item-title>
      </v-list-item-content>
    </template>

    <menu-item
      v-for="child in item.children"
      :key="menuKey(child)"
      :is-sub="true"
      :item="child"
    />
  </v-list-group>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { RouteConfig } from "vue-router";

@Component({
  name: "MenuItem",
})
export default class MenuItem extends Vue {
  @Prop({ type: Object, default: () => ({}) }) item: RouteConfig | undefined;

  @Prop({ type: Boolean, default: false }) isSub: boolean | undefined;

  menuKey(menu: RouteConfig): string {
    return menu.name || menu.path || menu.meta?.title;
  }

  menuTitle(menu: RouteConfig): string {
    return menu.meta ? menu.meta.title : menu.path || "set a title";
  }

  menuIcon(menu: RouteConfig): string {
    return menu.meta ? menu.meta.icon : "";
  }

  get hasChildren(): boolean {
    return !!this.item?.children?.length;
  }
}
</script>

<style scoped lang="scss">
.nest-item {
  padding-left: 32px;
}
</style>
