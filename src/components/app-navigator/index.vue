<template>
  <v-navigation-drawer v-bind="$attrs" absolute class="app-navigator">
    <app-menu :menu="routes" />
  </v-navigation-drawer>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import AppMenu from "../app-menu";
import { routes } from "@/router";

@Component({
  name: "appNavigator",
  components: { AppMenu },
  inheritAttrs: false,
})
export default class appNavigator extends Vue {
  routes = routes[0].children;
}
</script>

<style scoped lang="scss">
.app-navigator {
  position: fixed;
  top: 64px !important;
  box-shadow: 0 2px 10px rgba(150, 150, 150, 0.3);
}
</style>
