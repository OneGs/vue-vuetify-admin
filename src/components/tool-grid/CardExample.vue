<template>
  <div class="card-border pa-3 v-card v-sheet theme--light">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "CardExample",
})
export default class CardExample extends Vue {
  @Prop({ type: String, default: "none" }) text!: string;
}
</script>

<style scoped></style>
