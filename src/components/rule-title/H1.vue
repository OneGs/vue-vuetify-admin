<template>
  <h1
    class="text-h1 text-capitalize font-weight-semibold"
    :class="[dark ? 'text-white' : 'text-typo']"
  >
    <slot />
  </h1>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "RuleTitleH1",
})
export default class RuleTitleH1 extends Vue {
  @Prop({ type: Boolean, default: false }) dark?: boolean;
}
</script>
