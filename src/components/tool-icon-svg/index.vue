<template>
  <svg
    class="svg-icon"
    aria-hidden="true"
    :style="[{ padding }]"
    :class="[{ 'is-small': small, 'is-xsmall': xSmall }]"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "ToolIconSvg",
})
export default class ToolIconSvg extends Vue {
  @Prop({ type: String, default: null, required: true }) iconClass!: string;

  @Prop({ type: Boolean, default: false }) small!: boolean;

  @Prop({ type: Boolean, default: false }) xSmall!: boolean;

  @Prop({ type: Boolean }) large!: boolean;

  get iconName(): string {
    return `#icon-${this.iconClass}`;
  }

  get padding(): string {
    if (this.xSmall) return "2px";

    if (this.small) return "4px";

    return "4px";
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1.5rem;
  height: 1.5rem;
  fill: currentColor;
  overflow: hidden;
  vertical-align: middle;

  &.is-small {
    width: 1.25rem;
    height: 1.25rem;
  }

  &.is-xsmall {
    width: 1rem;
    height: 1rem;
  }
}
</style>
