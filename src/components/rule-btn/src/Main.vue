<template>
  <v-btn
    v-bind="$attrs"
    v-on="$listeners"
    class="rule-btn elevation-0 text-capitalize"
    :class="{ 'move-up': moveUp, 'px-6': !isSmall, 'py-3': !isSmall }"
    :icon="!!icon"
    :color="color"
    @mouseenter="moveUpFun"
    @mouseleave="modeDownFun"
    :ripple="false"
  >
    <slot>
      <v-icon v-if="hasIconString" v-text="icon" />
    </slot>
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "RuleBtn",

  inheritAttrs: false,
})
export default class RuleBtn extends Vue {
  moveUp = false;

  @Prop({ type: [Boolean, String], default: false }) icon?: string | boolean;

  @Prop({ type: String, default: "primary" }) color?: string;

  get hasIconString(): boolean {
    return this.icon !== "" && typeof this.icon === "string";
  }

  get isSmall(): boolean {
    return (
      Object.keys(this.$attrs).includes("small") ||
      Object.keys(this.$attrs).includes("x-small")
    );
  }

  moveUpFun(): void {
    this.moveUp = true;
  }

  modeDownFun(): void {
    this.moveUp = false;
  }
}
</script>

<style scoped lang="scss">
.rule-btn {
  transition: all 0.25s ease;

  &.move-up {
    transform: translateY(-1px);
  }
}
</style>
