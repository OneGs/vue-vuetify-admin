<template>
  <v-app-bar v-bind="$attrs">app-bar</v-app-bar>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "appBar",

  inheritAttrs: false,
})
export default class appBar extends Vue {}
</script>

<style scoped></style>
