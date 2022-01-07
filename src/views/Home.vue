<template>
  <div>home</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({ title: "首页", hidden: true })
@Component({
  name: "Home",
})
export default class Home extends Vue {}
</script>
