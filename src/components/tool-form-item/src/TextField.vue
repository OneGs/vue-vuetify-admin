<template>
  <v-text-field solo outlined flat dense :label="label" class="text-filed" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheForm from "./Main.vue";

@Component({
  name: "ToolTextField",
})
export default class ToolTextField extends Vue {
  get label(): string | undefined {
    return (this.$parent.$options.propsData as TheForm).label;
  }
}
</script>

<style scoped lang="scss">
.text-filed {
  box-shadow: none;
}
</style>
