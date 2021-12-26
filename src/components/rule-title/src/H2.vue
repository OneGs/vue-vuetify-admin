<template>
  <h2 class="text-h2">
    <slot />
  </h2>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "RuleTitleH2",
})
export default class RuleTitleH2 extends Vue {}
</script>

<style scoped lang="scss">
.text-h2 {
  color: #4b4b74 !important;
}
</style>
