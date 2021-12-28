<template>
  <v-app-bar
    v-bind="$attrs"
    color="primary"
    flat
    class="lighten-1 app-bar d-flex justify-space-between"
  >
    <v-img
      src="@/assets/logo.png"
      width="46"
      height="46"
      contain
      class="flex-grow-0"
    />

    <div class="flex-grow-1">menu</div>

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

@Component({
  name: "appBar",

  inheritAttrs: false,
})
export default class appBar extends Vue {
  userAvatar = "";
}
</script>

<style scoped lang="scss">
.app-bar {
  color: white;
}
</style>

<style lang="scss">
.app-bar {
  .v-toolbar__content {
    width: 100%;
  }
}
</style>
