<template>
  <v-navigation-drawer v-bind="$attrs" absolute class="app-navigator"
    >drawer</v-navigation-drawer
  >
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "appNavigator",

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
