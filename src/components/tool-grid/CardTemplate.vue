<template>
  <div class="card-border my-4 pa-3 v-card v-sheet theme--light">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "CardTemplate",
})
export default class CardTemplate extends Vue {
  @Prop({ type: String, default: "none" }) text!: string;
}
</script>

<style scoped></style>
