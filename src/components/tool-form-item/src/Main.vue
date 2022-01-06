<template>
  <div :class="[{ inline: isInline }]">
    <label class="label label-color mr-2" :style="[{ width: positionWidth }]">{{
      label
    }}</label>
    <div class="mt-3 flex-grow-1">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "ToolFormItem",
})
export default class ToolFormItem extends Vue {
  @Prop({ type: String, default: "" }) label?: string;

  @Prop({ type: String, default: "64px" }) positionWidth?: string;

  get isInline(): boolean {
    return !!Object.prototype.hasOwnProperty.call(
      this.$parent.$attrs,
      "inline"
    );
  }

  mounted(): void {
    if (this.isInline) {
      this.$el.classList.add("d-flex");
      this.$el.classList.add("align-center");
    }
  }
}
</script>

<style scoped lang="scss">
.label {
  font-weight: 600;
  margin-bottom: 12px;

  &-color {
    color: #525f7f;
  }
}
</style>
