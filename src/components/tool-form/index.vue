<template>
  <v-form>
    <slot />
  </v-form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

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

  @Prop({ type: Boolean, default: true }) hideDetails!: boolean;

  @Prop({ type: Boolean, default: false }) single!: boolean;
}
</script>

<style scoped></style>
