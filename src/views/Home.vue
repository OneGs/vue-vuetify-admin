<template>
  <hello-world />
</template>

<script lang="ts">
import HelloWorld from "@/components/page-welcome.vue";
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({ title: "首页", hidden: true })
@Component({
  name: "Home",

  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
