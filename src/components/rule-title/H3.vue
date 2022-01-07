<template>
  <h3 class="text-h3">
    <slot />
  </h3>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "RuleTitleH3",
})
export default class RuleTitleH3 extends Vue {}
</script>

<style scoped lang="scss">
.text-h3 {
  color: #4b4b74 !important;
}
</style>
