<template>
  <v-card class="card-stats-padding">
    <v-card-text class="pa-0">
      <v-row>
        <v-col>
          <div class="text-h5 text-muted text-uppercase">{{ title }}</div>
          <div class="text-h2 font-weight-semibold text-typo mb-0">
            {{ count }}
          </div>
        </v-col>
        <v-col class="text-right">
          <v-avatar size="48" :class="[`bg-gradient-${color}`]">
            <v-icon color="white" v-text="icon" />
          </v-avatar>
        </v-col>
      </v-row>

      <v-row class="mt-4 mb-0 text-body font-weight-light">
        <v-col class="py-0">
          <span class="success--text me-2">{{ tip }}</span>
          {{ describe }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from "vue-property-decorator";
import { RegisterBtn } from "@cps/the-mixins";

@Component({
  name: "CardTraffic",
})
export default class CardTraffic extends Mixins(RegisterBtn) {
  @Prop({ type: String, default: "info" }) color!: string;

  @Prop({ type: String, default: "Total Traffic" }) title!: string;

  @Prop({ type: String, default: "350,897" }) count!: string;

  @Prop({ type: String, default: "tips" }) tip!: string;

  @Prop({ type: String, default: "this is a describe for tips" })
  describe!: string;

  @Prop({ type: String, default: "mdi-cookie-settings" }) icon!: string;

  get bgGradientClass(): string {
    return `bg-gradient-${this.color}`;
  }
}
</script>
