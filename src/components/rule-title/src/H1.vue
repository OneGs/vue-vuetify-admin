<template>
  <h1 class="text-h1">
    <slot />
  </h1>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "RuleTitleH1",
})
export default class RuleTitleH1 extends Vue {}
</script>

<style scoped lang="scss">
.text-h1 {
  color: #4b4b74 !important;
}
</style>
