<template>
  <v-row>
    <v-col cols="8" class="mx-auto">
      <v-card>
        <v-card-title>
          <div class="text-h3 text-typo font-weight-600">Icons</div>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <v-row
            v-for="(iconRow, index) in svgIcons"
            :key="index"
            class="d-flex justify-space-between mt-0"
          >
            <v-col
              v-for="iconCol in iconRow"
              :key="iconCol"
              class="grey lighten-2 ma-4 rounded text-center vertical-middle"
            >
              <tool-icon-svg :icon-class="iconCol" />
              <span class="ml-4 vertical-middle font-size-root text-body">{{
                iconCol
              }}</span>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";
import { chunk } from "lodash";

@Meta({ title: "Icons", order: 50 })
@Component({
  name: "TheIcons",
})
export default class TheIcons extends Vue {
  svgIcons: string[][] = [];

  created(): void {
    const req = require.context("@/assets/svgs", false, /\.svg$/);

    const icons = req.keys().map((key) => key.replace(/\.\/|\.svg/gi, ""));

    this.svgIcons = chunk(icons, 2);
  }
}
</script>

<style scoped></style>
