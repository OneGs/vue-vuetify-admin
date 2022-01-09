<template>
  <v-row :class="[{ inline: isInline }]" class="pa-3">
    <v-col
      :cols="isInline ? positionWidth : 12"
      class="label label-color pa-0 mb-2 font-weight-600"
      >{{ label }}</v-col
    >
    <v-col class="pa-0">
      <slot />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "ToolFormItem",
})
export default class ToolFormItem extends Vue {
  @Prop({ type: String, default: "" }) label!: string;

  @Prop({ type: Number, default: 2 }) positionWidth!: number;

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
