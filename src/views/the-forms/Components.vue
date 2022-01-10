<template>
  <v-row>
    <v-col>
      <rule-card-template title="Input groups">
        <tool-form single>
          <tool-grid :row="3" :col="2">
            <template #0-0>
              <tool-form-item label="Your name">
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

      <rule-card-template class="mt-6" title="Selects">
        <tool-form>
          <tool-grid :row="1" :col="[[4, 8]]">
            <template #0-0>
              <tool-form-item label="Basic select">
                <rule-select :options="selectOptions" />
              </tool-form-item>
            </template>
            <template #0-1>
              <tool-form-item label="Multiple select">
                <rule-select
                  :options="selectOptions"
                  multiple
                  chips
                  v-model="selectValues"
                />
              </tool-form-item>
            </template>
          </tool-grid>
        </tool-form>
      </rule-card-template>

      <rule-card-template class="mt-6" title="Datepicker">
        <tool-form>
          <tool-grid :row="1" :col="2">
            <template #0-0>
              <tool-form-item label="Date Picker">
                <rule-date-picker v-model="date" />
              </tool-form-item>
            </template>
            <template #0-1>
              <tool-form-item label="Range Picker">
                <rule-date-picker v-model="rangeDate" range />
              </tool-form-item>
            </template>
          </tool-grid>
        </tool-form>
      </rule-card-template>

      <rule-card-template class="mt-6" title="Text Editor">
        Rich Text Editor
      </rule-card-template>
    </v-col>

    <v-col>
      <rule-card-template title="Tags">
        <v-chip
          v-if="chip1"
          close
          color="default"
          class="mr-2"
          @click:close="chip1 = false"
        >
          Bucharest
        </v-chip>
        <v-chip
          v-if="chip2"
          close
          color="default"
          class="mr-2"
          @click:close="chip2 = false"
        >
          Iasi
        </v-chip>
        <v-chip
          v-if="chip3"
          close
          color="default"
          class="mr-2"
          @click:close="chip3 = false"
        >
          Timisoara
        </v-chip>
      </rule-card-template>

      <rule-card-template title="Toggle Buttons" class="mt-6">
        <div class="d-flex align-center">
          <rule-switch
            v-for="(item, index) in preset"
            :key="item"
            :color="item"
            hide-details
            v-model="presetSelect[index]"
          />
        </div>
      </rule-card-template>

      <rule-card-template class="mt-6" title="Sliders">
        Sliders
      </rule-card-template>

      <rule-card-template class="mt-6" title="Dropzone">
        Dropzone
      </rule-card-template>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import { RegisterCard, RegisterForm } from "@cps/the-mixins";
import ToolGrid from "@cps/tool-grid/index.vue";
import moment from "moment";

@Meta({ title: "Components", order: 90 })
@Component({
  name: "FormComponents",
  components: { ToolGrid },
})
export default class FormComponents extends Mixins(RegisterCard, RegisterForm) {
  selectOptions = [
    { label: "foo", value: 0 },
    { label: "baz", value: 1 },
    { label: "flzz", value: 2 },
    { label: "bazz", value: 3 },
  ];

  preset = ["primary", "error", "info", "success", "warning", "default"];

  presetSelect = [false, true, true, true, true, true];

  selectValues = [0, 1];

  date = moment().format("YYYY-MM-DD");

  rangeDate = ["2019-09-10", "2019-09-20"];

  chip1 = true;

  chip2 = true;

  chip3 = true;
}
</script>

<style scoped></style>
