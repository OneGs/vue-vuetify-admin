<template>
  <v-text-field
    v-model="value"
    color="primary darken"
    label="Text field"
    placeholder="Start typing..."
    loading
    readonly
    hide-details
    class="py-4"
  />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "Loading",
})
export default class Loading extends Vue {
  value = "";

  progress = "";

  mounted(): void {
    const ele = this.$el.querySelector(".v-text-field__slot");

    ele?.parentElement?.removeChild(ele);
  }
}
</script>

<style scoped></style>
