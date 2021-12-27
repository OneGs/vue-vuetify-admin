<template>
  <v-select
    outlined
    solo
    flat
    dense
    :items="options"
    item-text="label"
    item-value="value"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { selectProp } from "@/components/tool-form-item/types/select";

@Component({
  name: "RuleSelect",
})
export default class RuleFormSelect extends Vue {
  @Prop({ type: Array, default: () => ({}) }) options: selectProp[] | undefined;
}
</script>

<style scoped></style>
