<template>
  <hello-world />
</template>

<script lang="ts">
import HelloWorld from "@/components/page-welcome.vue";
import { Component, Vue } from "vue-property-decorator";
import { RouteName } from "@/libs/auto-router/src/decorators/RouteName";

@RouteName("Home")
@Component({
  name: "HomeHome",

  components: {
    HelloWorld,
  },
})
export default class extends Vue {}
</script>
