<template>
  <v-card>
    <v-card-title class="card-heading-padding">
      <div class="text-h3 text-typo font-weight-semibold">{{ title }}</div>
    </v-card-title>

    <v-divider />

    <v-card-text class="card-padding">
      <p
        class="font-size-root lead font-weight-light text-body mb-5 text-capitalize"
      >
        {{ message }}
      </p>

      <div class="text-left">
        <rule-btn color="primary">Go somewhere</rule-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "CardDescribe",
})
export default class CardDescribe extends Vue {
  @Prop({ type: String, default: "Card Title" }) title?: string;

  @Prop({ type: String, default: "nothing" }) message?: string;
}
</script>

<style scoped></style>
