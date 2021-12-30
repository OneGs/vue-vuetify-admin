<template>
  <layouts />
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { RouteName } from "@/libs/auto-router";
import Layouts from "@/layouts/index.vue";

@RouteName("RootLayout")
@Component({
  name: "Layout",
  components: { Layouts },
})
export default class Layout extends Vue {}
</script>
