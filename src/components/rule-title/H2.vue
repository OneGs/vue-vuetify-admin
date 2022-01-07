<template>
  <h2 class="text-h2 text-typo text-capitalize font-weight-semibold">
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
