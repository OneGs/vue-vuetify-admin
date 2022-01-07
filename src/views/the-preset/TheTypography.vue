<template>
  <v-row>
    <v-col class="mx-auto pt-0" cols="8">
      <v-card class="mb-6 card-shadow">
        <v-card-title>
          <h3 class="text-h3 text-typo">Headings</h3>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <v-row v-for="index in 6" :key="index" class="d-flex align-end">
            <v-col cols="4" class="py-4 text-muted font-weight-600"
              >HEADING {{ index }} / {{ headings[index - 1] }}</v-col
            >
            <v-col cols="8" :class="`text-h${index}`" class="py-4 text-typo"
              >ZeroSumCloud PRO</v-col
            >
          </v-row>
        </v-card-text>
      </v-card>

      <v-card class="card-shadow mb-6">
        <v-card-title>
          <h3 class="text-h3 text-typo">Display Titles</h3>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <v-row v-for="index in 4" :key="index" class="d-flex align-end">
            <v-col cols="4" class="py-4 text-muted font-weight-600"
              >DISPLAY {{ index }} / {{ displays[index - 1] }}</v-col
            >
            <v-col cols="8" class="py-4">
              <div
                class="text-typo font-weight-600"
                :class="`display-h-${index}`"
              >
                ZeroSumCloud
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card class="card-shadow mb-6">
        <v-card-title>
          <h3 class="text-h3 text-typo">Specialized titles</h3>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <v-row class="d-flex align-end">
            <v-col cols="4" class="py-4 font-weight-600 text-muted"
              >HEADING</v-col
            >
            <v-col
              cols="8"
              class="py-4 heading text-typo text-uppercase font-weight-600"
              >heading text-typo font-weight-600</v-col
            >
          </v-row>

          <v-row class="d-flex align-end">
            <v-col cols="4" class="py-4 font-weight-600 text-muted"
              >HEADING TITLE</v-col
            >
            <v-col
              cols="8"
              class="py-4 font-weight-600 heading-title text-warning text-uppercase"
              >font-weight-600 heading-title text-warning</v-col
            >
          </v-row>

          <v-row class="d-flex align-end">
            <v-col cols="4" class="py-4 font-weight-600 text-muted"
              >HEADING SECTION</v-col
            >
            <v-col cols="8" class="py-4">
              <div class="display-h-3 text-typo font-weight-600">
                Display-h-3 Text-typo Font-weight-600
              </div>
              <div class="mt-5 mb-0 lead text-muted font-weight-light">
                lead text-muted font-weight-light
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card class="card-shadow mb-6">
        <v-card-title>
          <h3 class="text-h3 text-typo">Display Titles</h3>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <v-row class="d-flex align-end">
            <v-col cols="4" class="py-4 text-muted font-weight-semibold"
              >PARAGRAPH</v-col
            >
            <v-col
              cols="8"
              class="py-4 text-body font-weight-light font-size-root"
              >text-body font-weight-light font-size-root. I will be the leader
              of a company that ends up being worth billions of dollars, because
              I got the answers.</v-col
            >
          </v-row>

          <v-row class="d-flex align-end">
            <v-col cols="4" class="py-4">LEAD TEXT</v-col>
            <v-col cols="8" class="py-4 lead text-body font-weight-light lead"
              >text-body font-weight-light lead. I will be the leader of a
              company that ends up being worth billions of dollars, because I
              got the answers.</v-col
            >
          </v-row>

          <!--          <v-row class="d-flex align-end">-->
          <!--            <v-col cols="4" class="py-4">QUOTE</v-col>-->
          <!--            <v-col cols="8" class="py-4">-->
          <!--              <p>text-body</p>-->
          <!--              <p>sd</p>-->
          <!--            </v-col>-->
          <!--          </v-row>-->

          <v-row class="d-flex align-end">
            <v-col cols="4" class="py-4">MUTED TEXT</v-col>
            <v-col
              cols="8"
              class="py-4 font-weight-light font-size-root text-muted"
              >font-weight-light font-size-root text-muted</v-col
            >
          </v-row>

          <v-row class="d-flex align-end">
            <v-col cols="4" class="py-4">PRIMARY TEXT</v-col>
            <v-col
              cols="8"
              class="py-4 font-weight-light font-size-root text-primary"
              >font-weight-light font-size-root text-primary</v-col
            >
          </v-row>

          <v-row class="d-flex align-end">
            <v-col cols="4" class="py-4">INFO TEXT</v-col>
            <v-col
              cols="8"
              class="py-4 font-weight-light font-size-root text-info"
              >font-weight-light font-size-root text-info</v-col
            >
          </v-row>

          <v-row class="d-flex align-end">
            <v-col cols="4" class="py-4">SUCCESS TEXT</v-col>
            <v-col
              cols="8"
              class="py-4 font-weight-light font-size-root text-success"
              >font-weight-light font-size-root text-success</v-col
            >
          </v-row>

          <v-row class="d-flex align-end">
            <v-col cols="4" class="py-4">WARNING TEXT</v-col>
            <v-col
              cols="8"
              class="py-4 font-weight-light font-size-root text-warning"
              >font-weight-light font-size-root text-warning</v-col
            >
          </v-row>

          <v-row class="d-flex align-end">
            <v-col cols="4" class="py-4">DANGER TEXT</v-col>
            <v-col
              cols="8"
              class="py-4 font-weight-light font-size-root text-danger"
              >font-weight-light font-size-root text-danger</v-col
            >
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({
  title: "Typography",
  order: 10,
  icon: "mdi-format-text",
  color: "indigo",
})
@Component({
  name: "TheTitle",
})
export default class TheTitle extends Vue {
  headings = [
    "1.625rem",
    "1.25rem",
    "1.0625rem",
    "0.9375rem",
    "0.8125rem",
    "0.625rem",
  ];

  displays = ["3.3rem", "2.5rem", "2.1875rem", "1.6275rem"];
}
</script>
