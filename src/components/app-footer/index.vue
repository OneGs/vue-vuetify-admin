<template>
  <v-footer v-bind="$attrs">footer</v-footer>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "appFooter",

  inheritAttrs: false,
})
export default class appFooter extends Vue {}
</script>

<style scoped></style>
