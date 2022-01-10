<template>
  <v-row :class="[{ inline: isInline }]" class="pa-3">
    <v-col
      v-if="!_single"
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

  @Prop({ type: Number, default: 2 }) positionWidth!: number;

  @Prop({ type: Boolean, default: false }) single!: boolean;

  @Inject({ default: {} }) form!: ToolForm;

  get _single(): boolean {
    console.log(this.form);

    return this.single || this.form.single;
  }

  get isInline(): boolean {
    console.log(this.form.inline, "inline");

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
