<template>
  <v-menu
    ref="menu"
    v-model="visible"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    origin="top center"
    offset-y
    min-width="auto"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        solo
        outlined
        flat
        hide-details
        label="Picker in dialog"
        readonly
        class="cursor-pointer"
        :height="height"
        v-on="on"
        v-bind="attrs"
      >
        <template #append>
          <v-icon small>mdi-calendar-blank</v-icon>
        </template>
      </v-text-field>
    </template>

    <v-date-picker
      no-title
      scrollable
      v-model="date"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <v-spacer />
      <rule-btn color="error" @click="visible = false"> Cancel </rule-btn>
      <rule-btn color="primary" @click="$refs.menu.save(date)"> OK </rule-btn>
    </v-date-picker>
  </v-menu>
</template>

<script lang="ts">
import { Component, Emit, Watch, Mixins } from "vue-property-decorator";
import RuleTextField from "@cps/tool-form-item/TextField.vue";
import RuleBtn from "@cps/rule-btn/index.vue";
import moment from "moment";
import Input from "@cps/tool-form-item/mixins/input";

@Component({
  inheritAttrs: false,

  name: "RuleDatePicker",

  components: { RuleTextField, RuleBtn },
})
export default class RuleDatePicker extends Mixins(Input) {
  visible = false;

  date = "";

  @Watch("visible")
  @Emit()
  opened(_visible: boolean): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.$nextTick().then(() => {
        _visible && resolve(_visible);
      });
    });
  }

  defaultDate(type: string): void {
    if (!type || type === "date") {
      this.date = moment().format("YYYY-MM-DD");
    }

    if (type === "month") {
      this.date = moment().format("YYYY-MM");
    }
  }

  created(): void {
    const { type } = this.$attrs;

    this.defaultDate(type);
  }
}
</script>
