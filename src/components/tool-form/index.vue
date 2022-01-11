<template>
  <v-form>
    <slot />
  </v-form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { findParentByName } from "@uts/tools";

@Component({
  name: "ToolForm",

  provide() {
    return {
      rootForm: this,
    };
  },
})
export default class ToolForm extends Vue {
  @Prop({ type: Boolean, default: false }) inline!: boolean;

  @Prop({ type: Boolean, default: false }) hideDetails!: boolean;

  @Prop({ type: Boolean, default: false }) single!: boolean;

  @Prop({ type: Number, default: 2 }) positionWidth!: number;

  mounted(): void {
    const a = findParentByName(this, "v-card1");

    console.log(a, "a");
  }
}
</script>

<style scoped></style>
