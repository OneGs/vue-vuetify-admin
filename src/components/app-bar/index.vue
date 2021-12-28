<template>
  <v-app-bar
    v-bind="$attrs"
    color="primary"
    flat
    class="app-bar d-flex justify-space-between"
  >
    <v-img
      src="@/assets/logo.png"
      width="46"
      height="46"
      contain
      class="flex-grow-0"
    />

    <div class="flex-grow-1 ml-4">
      <horizontal
        :menu="routes"
        style="background: transparent !important"
        color="white"
      />
    </div>

    <div class="flex-grow-0 d-flex align-center flex-row-reverse">
      <div class="d-flex align-center">
        <v-avatar size="36" class="lighten-1">
          <v-img lazy-src="@/assets/user.png" :src="userAvatar" />
        </v-avatar>
        <span
          class="ml-1"
          style="
            width: 50px;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
          "
          >welcome</span
        >
      </div>

      <div class="mr-2">
        <v-btn icon color="#fff">
          <v-icon v-text="'mdi-magnify'" />
        </v-btn>
        <v-btn icon color="#fff">
          <v-icon v-text="'mdi-bell'" />
        </v-btn>
        <v-btn icon color="#fff">
          <v-icon v-text="'mdi-cog-outline'" />
        </v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Horizontal from "@/components/app-menu/Horizontal.vue";
import { routes } from "@/router";

@Component({
  name: "appBar",
  components: { Horizontal },
  inheritAttrs: false,
})
export default class appBar extends Vue {
  userAvatar = "";

  routes = routes[0].children;
}
</script>

<style scoped lang="scss">
.app-bar {
  color: white;
  border-bottom: 1px solid rgba(250, 250, 250, 0.3);
}
</style>

<style lang="scss">
.app-bar {
  .v-toolbar__content {
    width: 100%;
  }
}
</style>
