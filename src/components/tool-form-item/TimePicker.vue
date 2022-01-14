<template>
  <v-menu
    ref="menu"
    v-model="visible"
    :close-on-content-click="false"
    :return-value.sync="modeValue"
    transition="scale-transition"
    origin="top center"
    offset-y
    min-width="auto"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="modeValue"
        solo
        outlined
        flat
        :hide-details="inlineHideDetails"
        :placeholder="_label"
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
      v-model="modeValue"
      v-bind="$attrs"
      v-on="$listeners"
      format="24hr"
      scrollable
      @click:minute="clickMinute"
    />
  </v-menu>
</template>

<script lang="ts">
import { Component, Ref, Mixins, VModel } from "vue-property-decorator";
import RuleTextField from "./TextField.vue";
import RuleBtn from "@cps/rule-btn/index.vue";
import { LoopAny } from "@/types/common";
import Input from "@cps/tool-form-item/mixins/input";
import moment from "moment";

@Component({
  inheritAttrs: false,

  name: "RuleTimePicker",

  components: { RuleTextField, RuleBtn },
})
export default class RuleTimePicker extends Mixins(Input) {
  visible = false;

  @VModel({ type: [String], default: moment().format("HH:mm") })
  modeValue!: string;

  @Ref() readonly menu!: LoopAny;

  clickMinute(): void {
    this.visible = false;

    this.menu.save(this.modeValue);
  }
}
</script>

<style scoped></style>
