<template>
  <v-row :class="[{ inline: isInline }]" class="ma-0">
    <v-col
      v-if="!innerSingle"
      :cols="isInline ? innerPositionWidth : 12"
      class="label label-color pa-0 font-weight-600"
      :class="[{ 'mb-2': !isInline && label }]"
    >
      {{ label }}
      <div :style="{ height: isInline && !isHideDetails ? '29px' : '0' }" />
    </v-col>

    <v-col class="pa-0">
      <slot />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from "vue-property-decorator";
import ToolForm from "@cps/tool-form/index.vue";

@Component({
  name: "ToolFormItem",

  provide() {
    return {
      formItem: this,
    };
  },
})
export default class ToolFormItem extends Vue {
  @Prop({ type: String, default: "" }) label!: string;

  @Prop({ type: Number, default: null }) positionWidth!: number;

  @Prop({ type: Boolean, default: false }) single!: boolean;

  @Inject({ default: {} }) rootForm!: ToolForm;

  get innerSingle(): boolean {
    return this.single || this.rootForm.single;
  }

  get innerPositionWidth(): number {
    return this.positionWidth || this.rootForm.positionWidth || 2;
  }

  get isInline(): boolean {
    return (
      !!Object.prototype.hasOwnProperty.call(this.$parent.$attrs, "inline") ||
      this.rootForm.inline
    );
  }

  get isHideDetails(): boolean {
    return this.rootForm.hideDetails;
  }

  mounted(): void {
    if (this.isInline) {
      this.$el.classList.add("d-flex");
      this.$el.classList.add("align-center");
    }
  }
}
</script>
