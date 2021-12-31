<template>
  <div class="pa-0">
    <v-card>
      <v-card-title>
        <rule-h1>纵向</rule-h1>
      </v-card-title>

      <v-divider />

      <div class="pa-4">
        <app-menu :menu="menus" />
      </div>
    </v-card>

    <v-card class="mt-4">
      <v-card-title>
        <rule-h1>横向</rule-h1>
      </v-card-title>

      <v-divider />

      <div class="pa-4">
        <horizontal :menu="menus" />
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";
import AppMenu from "@/components/app-menu/Vertial.vue";
import { RouteConfig } from "vue-router";
import Horizontal from "@/components/app-menu/Horizontal.vue";

@Meta({ title: "横 & 纵向菜单", icon: "mdi-menu", color: "green", order: 7 })
@Component({
  name: "TheMenus",
  components: { Horizontal, AppMenu },
})
export default class TheMenus extends Vue {
  menus: RouteConfig[] = [
    {
      path: "",
      meta: { title: "一级目录： 一" },
      children: [
        { path: "", meta: { title: "二级目录：一" } },
        { path: "", meta: { title: "二级目录：二" } },
      ],
    },
    {
      path: "",
      meta: { title: "一级目录：二" },
      children: [{ path: "", meta: { title: "二级目录" } }],
    },
  ];
}
</script>

<style scoped></style>
