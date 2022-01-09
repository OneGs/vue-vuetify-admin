<template>
  <v-menu
    ref="menu"
    v-model="visible"
    :close-on-content-click="false"
    :return-value.sync="time"
    transition="scale-transition"
    origin="top center"
    offset-y
    min-width="auto"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="time"
        solo
        outlined
        flat
        hide-details
        label="Picker in dialog"
        readonly
        class="cursor-pointer"
        v-on="on"
        v-bind="attrs"
        :height="height"
      >
        <template #append>
          <v-icon small> mdi-clock-time-three-outline </v-icon>
        </template>
      </v-text-field>
    </template>

    <v-time-picker
      v-model="time"
      v-bind="$attrs"
      v-on="$listeners"
      format="24hr"
      scrollable
      @click:minute="clickMinute"
    />
  </v-menu>
</template>

<script lang="ts">
import { Component, Ref, Mixins } from "vue-property-decorator";
import RuleTextField from "./TextField.vue";
import RuleBtn from "@cps/rule-btn/index.vue";
import { LoopAny } from "@/types/common";
import Input from "@cps/tool-form-item/mixins/input";
import moment from "moment";

@Component({
  inheritAttrs: false,

  name: "TimePicker",

  components: { RuleTextField, RuleBtn },
})
export default class TimePicker extends Mixins(Input) {
  visible = false;

  time = "";

  @Ref() readonly menu!: LoopAny;

  clickMinute(): void {
    this.visible = false;

    this.menu.save(this.time);
  }

  defaultDate(): void {
    this.time = moment().format("HH:mm");
  }

  created(): void {
    this.defaultDate();

    console.log(this.time);
  }
}
</script>

<style scoped></style>
