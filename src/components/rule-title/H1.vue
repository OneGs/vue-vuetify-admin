<template>
  <h1 class="text-h1 text-typo text-capitalize font-weight-semibold">
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
