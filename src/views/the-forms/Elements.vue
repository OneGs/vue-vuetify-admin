<template>
  <div>
    <rule-card-template title="Form group in grid">
      <tool-form hide-details>
        <tool-grid v-model="groupSlots" :row="3" :col="[[3], [4], [2]]">
          <template v-for="slot in groupSlots" #[slot]="{ currentRow }">
            <tool-form-item
              label="One of three cols"
              :key="slot"
              :class="{ 'mb-6': currentRow !== 2 }"
            >
              <rule-text-field />
            </tool-form-item>
          </template>
        </tool-grid>
      </tool-form>
    </rule-card-template>

    <v-row class="d-flex justify-space-between mt-6">
      <v-col>
        <rule-card-template title="Input groups - hide details">
          <tool-form single>
            <tool-grid :row="3" :col="2">
              <template #0-0>
                <tool-form-item label="Your name" class="pb-0">
                  <rule-text-field prepend-inner-icon="mdi-account" />
                </tool-form-item>
              </template>
              <template #0-1>
                <tool-form-item label="Email">
                  <rule-text-field prepend-inner-icon="mdi-email" />
                </tool-form-item>
              </template>
              <template #1-0>
                <tool-form-item label="Location">
                  <rule-text-field append-icon="mdi-map-marker" />
                </tool-form-item>
              </template>
              <template #1-1>
                <tool-form-item label="Password">
                  <rule-text-field
                    type="password"
                    append-icon="mdi-eye-outline"
                  />
                </tool-form-item>
              </template>
              <template #2-0>
                <tool-form-item label="Payment method">
                  <rule-text-field
                    prepend-inner-icon="mdi-credit-card-outline"
                    append-icon="USD"
                  />
                </tool-form-item>
              </template>
              <template #2-1>
                <tool-form-item label="Phone">
                  <rule-text-field
                    prepend-inner-icon="mdi-earth"
                    append-icon="mdi-phone"
                  />
                </tool-form-item>
              </template>
            </tool-grid>
          </tool-form>
        </rule-card-template>
      </v-col>
      <v-col>
        <rule-card-template title="Input groups">
          <tool-form>
            <tool-grid :row="3" :col="2">
              <template #0-0>
                <tool-form-item label="Your name" class="pb-0">
                  <rule-text-field prepend-inner-icon="mdi-account" />
                </tool-form-item>
              </template>
              <template #0-1>
                <tool-form-item label="Email">
                  <rule-text-field prepend-inner-icon="mdi-email" />
                </tool-form-item>
              </template>
              <template #1-0>
                <tool-form-item label="Location">
                  <rule-text-field append-icon="mdi-map-marker" />
                </tool-form-item>
              </template>
              <template #1-1>
                <tool-form-item label="Password">
                  <rule-text-field
                    type="password"
                    append-icon="mdi-eye-outline"
                  />
                </tool-form-item>
              </template>
              <template #2-0>
                <tool-form-item label="Payment method">
                  <rule-text-field
                    prepend-inner-icon="mdi-credit-card-outline"
                    append-icon="USD"
                  />
                </tool-form-item>
              </template>
              <template #2-1>
                <tool-form-item label="Phone">
                  <rule-text-field
                    prepend-inner-icon="mdi-earth"
                    append-icon="mdi-phone"
                  />
                </tool-form-item>
              </template>
            </tool-grid>
          </tool-form>
        </rule-card-template>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-space-between mt-6">
      <v-col>
        <rule-card-template title="Form controls">
          <tool-form>
            <tool-form-item label="Email address">
              <rule-text-field label="name@exmaple.com" rules="required" />
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
          </tool-form>
        </rule-card-template>

        <rule-card-template class="mt-6" title="HTML5 Inputs">
          <tool-form inline :position-width="2">
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
              <rule-date-picker />
            </tool-form-item>
            <tool-form-item label="Month">
              <rule-date-picker type="month" />
            </tool-form-item>
            <tool-form-item label="Year">
              <rule-date-picker
                :active-picker.sync="activePicker"
                @opened="opened"
              />
            </tool-form-item>
            <tool-form-item label="Time">
              <rule-time-picker />
            </tool-form-item>
            <tool-form-item label="Loading">
              <rule-loading />
            </tool-form-item>
          </tool-form>
        </rule-card-template>

        <rule-card-template class="mt-6" title="Checkboxes and radios">
          <tool-form hide-details>
            <tool-grid :row="1" :col="2">
              <template #0-0>
                <rule-checkbox :options="exampleOptions" dense />
              </template>
              <template #0-1>
                <rule-radio :options="exampleOptions" dense class="mt-0" />
              </template>
            </tool-grid>
          </tool-form>
        </rule-card-template>
      </v-col>

      <v-col>
        <rule-card-template title="Sizes">
          <tool-form hide-details>
            <tool-form-item label="Large input" class="mb-6">
              <rule-text-field large />
            </tool-form-item>
            <tool-form-item label="Default input" class="mb-6">
              <rule-text-field />
            </tool-form-item>
            <tool-form-item label="Small input">
              <rule-text-field small />
            </tool-form-item>
          </tool-form>
        </rule-card-template>

        <rule-card-template class="mt-6" title="Selects">
          <tool-form>
            <tool-form-item label="Basic select">
              <rule-select :options="exampleOptions" />
            </tool-form-item>
            <tool-form-item label="Basic select disabled">
              <rule-select :options="exampleOptions" disabled />
            </tool-form-item>
            <tool-form-item label="Multiple">
              <rule-select :options="exampleOptions" multiple />
            </tool-form-item>
            <tool-form-item label="Multiple disabled">
              <rule-select :options="exampleOptions" multiple disabled />
            </tool-form-item>
          </tool-form>
        </rule-card-template>

        <rule-card-template class="mt-6" title="File">
          <tool-form hide-details>
            <tool-form-item label="File Input">
              <rule-file />
            </tool-form-item>
          </tool-form>
        </rule-card-template>

        <rule-card-template class="mt-6" title="HTML5 Inputs Hide Details">
          <tool-form inline hide-details :position-width="2">
            <tool-form-item label="Text" class="mb-6">
              <rule-text-field label="John Snow" />
            </tool-form-item>
            <tool-form-item label="Search" class="mb-6">
              <rule-text-field label="Tell me your secret" />
            </tool-form-item>
            <tool-form-item label="Email" class="mb-6">
              <rule-text-field label="argon@example.com" />
            </tool-form-item>
            <tool-form-item label="Number" class="mb-6">
              <rule-text-field label="1234" />
            </tool-form-item>
            <tool-form-item label="Date" class="mb-6">
              <rule-date-picker />
            </tool-form-item>
            <tool-form-item label="Month">
              <rule-date-picker type="month" />
            </tool-form-item>
          </tool-form>
        </rule-card-template>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Meta } from "@/libs/auto-router";
import { Component, Mixins } from "vue-property-decorator";
import {
  RegisterCard,
  RegisterForm,
  RegisterGrid,
  RegisterHeading,
} from "@cps/the-mixins";

@Meta({ title: "Elements", order: 100 })
@Component({
  name: "TheElements",
})
export default class Elements extends Mixins(
  RegisterForm,
  RegisterGrid,
  RegisterCard,
  RegisterHeading
) {
  groupSlots = [];

  activePicker = "";

  exampleOptions = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
  ];

  opened(status: boolean): void {
    status && (this.activePicker = "YEAR");
  }
}
</script>

<style scoped></style>
