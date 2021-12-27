<template>
  <div>
    <label class="label label-color">{{ label }}</label>
    <div class="mt-3">
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
  @Prop({ type: String, default: "" }) label: string | undefined;
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
