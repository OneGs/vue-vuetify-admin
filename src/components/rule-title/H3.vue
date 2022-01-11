<template>
  <h3 class="text-h3 text-typo text-capitalize font-weight-semibold">
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
