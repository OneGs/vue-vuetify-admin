<template>
  <v-row>
    <v-col cols="8" class="mx-auto pt-0">
      <rule-card-template title="Grid System">
        <tool-grid v-model="systemSlots">
          <template v-for="slot in systemSlots" #[slot]>
            <rule-card-example :key="slot" text="One of three columns" />
          </template>
        </tool-grid>
      </rule-card-template>

      <rule-card-template class="mt-6" title="Equal Width">
        <tool-grid v-model="systemSlots" :row="2" :col="[[2], [3]]">
          <template
            v-for="slot in systemSlots"
            #[slot]="{ currentCol, length }"
          >
            <rule-card-example
              :key="slot"
              :text="`${currentCol} of ${length}`"
            />
          </template>
        </tool-grid>
      </rule-card-template>

      <rule-card-template class="mt-6" title="Setting one column width">
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
            <rule-card-example
              :key="slot"
              :text="`${currentCol} of ${length}`"
            />
          </template>
        </tool-grid>
      </rule-card-template>

      <rule-card-template class="mt-6" title="Equal-width multi-row">
        <tool-grid v-model="systemSlots" :row="2" :col="4">
          <template v-for="slot in systemSlots" #[slot]>
            <rule-card-example :key="slot" text="columns" />
          </template>
        </tool-grid>
      </rule-card-template>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import { RegisterCard, RegisterGrid } from "@cps/the-mixins";

@Meta({ title: "Grid", order: 60 })
@Component({
  name: "TheGrid",
})
export default class TheGrid extends Mixins(RegisterGrid, RegisterCard) {
  systemSlots = [];
}
</script>

<style scoped></style>
