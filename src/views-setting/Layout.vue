<template>
  <layouts />
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { Meta, RouteName } from "@/libs/auto-router";
import Layouts from "@/layouts/index.vue";

@RouteName("RootLayoutSetting")
@Meta({ title: "setting", order: 100 })
@Component({
  name: "Layout",
  components: { Layouts },
})
export default class Layout extends Vue {}
</script>
