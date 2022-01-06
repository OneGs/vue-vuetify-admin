<template>
  <div>
    <v-card>
      <v-card-title class="card-heading-padding">
        <div class="text-h3 text-typo font-weight-semibold">
          Form group in grid
        </div>
      </v-card-title>

      <v-divider />

      <v-card-text class="card-padding">
        <v-form class="py-2">
          <tool-grid v-model="groupSlots" :row="3" :col="[[3], [4], [2]]">
            <template v-for="slot in groupSlots" #[slot]>
              <tool-form-item label="One of three cols" :key="slot">
                <rule-text-field />
              </tool-form-item>
            </template>
          </tool-grid>
        </v-form>
      </v-card-text>
    </v-card>

    <v-row class="d-flex justify-space-between mt-6">
      <v-col>
        <v-card>
          <v-card-title class="card-heading-padding">
            <div class="text-h3 text-typo font-weight-semibold">
              Form controls
            </div>
          </v-card-title>

          <v-divider />

          <v-card-text>
            <v-form>
              <tool-form-item label="Email address">
                <rule-text-field label="name@exmaple.com" />
              </tool-form-item>
              <tool-form-item label="Example select">
                <rule-select :options="exampleOptions" />
              </tool-form-item>
              <tool-form-item label="Example multiple select">
                <rule-select :options="exampleOptions" multiple />
              </tool-form-item>
              <tool-form-item label="Textarea">
                <rule-textarea />
              </tool-form-item>
            </v-form>
          </v-card-text>
        </v-card>

        <v-card class="mt-6">
          <v-card-title class="card-heading-padding">
            <div class="text-h3 text-typo font-weight-semibold">
              HTML5 Inputs
            </div>
          </v-card-title>

          <v-divider />

          <v-card-text class="card-padding">
            <v-form inline>
              <tool-form-item label="Text">
                <rule-text-field label="John Snow" />
              </tool-form-item>
              <tool-form-item label="Search">
                <rule-text-field label="Tell me your secret" />
              </tool-form-item>
              <tool-form-item label="Email">
                <rule-text-field label="argon@example.com" />
              </tool-form-item>
              <tool-form-item label="URL">
                <rule-text-field label="https://www.creative-tim.com/" />
              </tool-form-item>
              <tool-form-item label="Password">
                <rule-text-field password type="password" />
              </tool-form-item>
              <tool-form-item label="Number">
                <rule-text-field label="1234" />
              </tool-form-item>
              <tool-form-item label="Date">
                <rule-text-field label="1234" />
              </tool-form-item>
            </v-form>
          </v-card-text>
        </v-card>

        <v-card class="mt-6">
          <v-card-title class="card-heading-padding">
            <div class="text-h3 text-typo font-weight-semibold">
              Checkboxes and radios
            </div>
          </v-card-title>

          <v-divider />

          <v-card-text class="card-padding">
            <v-row>
              <v-col cols="6">
                <rule-checkbox :options="exampleOptions"
              /></v-col>
              <v-col cols="6">ss</v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>aa</v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";

@Meta({ title: "Elements", order: 100 })
@Component({
  name: "TheElements",
})
export default class Elements extends Vue {
  groupSlots = [];

  exampleOptions = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
  ];
}
</script>

<style scoped></style>
