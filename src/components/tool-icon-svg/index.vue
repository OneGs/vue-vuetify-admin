<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "ToolIconSvg",
})
export default class ToolIconSvg extends Vue {
  @Prop({ type: String, default: null, required: true }) iconClass?: string;

  @Prop({ type: Boolean, default: false }) small?: boolean;

  @Prop({ type: Boolean, default: false }) xSmall?: boolean;

  @Prop({ type: Boolean }) large?: boolean;

  get iconName(): string {
    return `#icon-${this.iconClass}`;
  }
}
</script>

<style>
.svg-icon {
  width: 1.5rem;
  height: 1.5rem;
  fill: currentColor;
  overflow: hidden;
  vertical-align: middle;
}
</style>
