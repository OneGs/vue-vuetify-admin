<template>
  <div>
    <label class="label-color" style="font-weight: 600">{{ label }}</label>
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "ToolFormItem",
})
export default class ToolFormItem extends Vue {
  @Prop({ type: String, default: "" }) label: string | undefined;

  mounted(): void {
    if (!this.$children) return;

    const children = this.$children.filter((child) => {
      if (child.$vnode.tag?.includes("v-text-field")) {
        return true;
      }
    })[0];

    console.log(children);

    // (children as any).solo = true;
  }
}
</script>

<style scoped lang="scss">
.label {
  font-weight: 600;

  &-color {
    color: #525f7f;
  }
}
</style>
