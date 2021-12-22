<template>
  <hello-world />
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { Component, Vue } from "vue-property-decorator";
import { RouteName } from "ea-router";

@RouteName("Home")
@Component({
  name: "Home",

  components: {
    HelloWorld,
  },
})
export default class extends Vue {}
</script>
