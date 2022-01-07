<template>
  <v-row>
    <v-col cols="8" class="mx-auto pt-0">
      <v-card>
        <v-card-title>
          <div class="text-h3 font-weight-600 text-typo">Grid System</div>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <tool-grid v-model="systemSlots">
            <template v-for="slot in systemSlots" #[slot]>
              <rule-card-template :key="slot" text="One of three columns" />
            </template>
          </tool-grid>
        </v-card-text>
      </v-card>

      <v-card class="mt-6">
        <v-card-title>
          <div class="text-h3 font-weight-600 text-typo">Equal Width</div>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <tool-grid v-model="systemSlots" :row="2" :col="[[2], [3]]">
            <template
              v-for="slot in systemSlots"
              #[slot]="{ currentCol, length }"
            >
              <rule-card-template
                :key="slot"
                :text="`${currentCol} of ${length}`"
              />
            </template>
          </tool-grid>
        </v-card-text>
      </v-card>

      <v-card class="mt-6">
        <v-card-title>
          <div class="text-h3 font-weight-600 text-typo">
            Setting one column width
          </div>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <tool-grid
            v-model="systemSlots"
            :row="2"
            :col="[
              [3, 6, 0],
              [0, 5, 0],
            ]"
          >
            <template
              v-for="slot in systemSlots"
              #[slot]="{ currentCol, length }"
            >
              <rule-card-template
                :key="slot"
                :text="`${currentCol} of ${length}`"
              />
            </template>
          </tool-grid>
        </v-card-text>
      </v-card>

      <v-card class="mt-6">
        <v-card-title>
          <div class="text-h3 font-weight-600 text-typo">
            Equal-width multi-row
          </div>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <tool-grid v-model="systemSlots" :row="2" :col="4">
            <template v-for="slot in systemSlots" #[slot]>
              <rule-card-template :key="slot" text="columns" />
            </template>
          </tool-grid>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import { RegisterGrid } from "@cps/the-mixins";

@Meta({ title: "Grid", order: 60 })
@Component({
  name: "TheGrid",
})
export default class TheGrid extends Mixins(RegisterGrid) {
  systemSlots = [];
}
</script>

<style scoped></style>
