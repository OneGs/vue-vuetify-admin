<template>
  <v-navigation-drawer
    v-bind="$attrs"
    absolute
    class="app-navigator"
    :mini-variant.sync="miniVariant"
    permanent
  >
    <v-list-item>
      <v-list-item-content v-if="!miniVariant">
        <v-list-item-title class="text-h6"> Application </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>

      <rule-btn
        icon="mdi-menu"
        color="black"
        @click="miniVariant = !miniVariant"
      />
    </v-list-item>

    <app-menu :menu="routes" :toggle="miniVariant" />
  </v-navigation-drawer>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import AppMenu from "../app-menu/Vertial.vue";
import { routes } from "@/router";

@Component({
  name: "appNavigator",
  components: { AppMenu },
  inheritAttrs: false,
})
export default class appNavigator extends Vue {
  routes = routes[0].children;

  miniVariant = false;
}
</script>
