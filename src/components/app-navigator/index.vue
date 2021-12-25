<template>
  <v-navigation-drawer v-bind="$attrs" absolute class="app-navigator">
    <app-menu />
  </v-navigation-drawer>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import AppMenu from "../app-menu";

@Component({
  name: "appNavigator",
  components: { AppMenu },
  inheritAttrs: false,
})
export default class appNavigator extends Vue {}
</script>

<style scoped lang="scss">
.app-navigator {
  position: fixed;
  top: 64px !important;
}
</style>
