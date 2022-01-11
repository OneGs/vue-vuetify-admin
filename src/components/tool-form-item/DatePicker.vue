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
        label="Picker in dialog"
        readonly
        :placeholder="_label"
        :hide-details="inlineHideDetails"
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
      v-model="modeValue"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <v-spacer />
      <rule-btn color="error" @click="visible = false"> Cancel </rule-btn>
      <rule-btn color="primary" @click="$refs.menu.save(modeValue)">
        OK
      </rule-btn>
    </v-date-picker>
  </v-menu>
</template>

<script lang="ts">
import { Component, Emit, Watch, Mixins } from "vue-property-decorator";
import RuleTextField from "@cps/tool-form-item/TextField.vue";
import RuleBtn from "@cps/rule-btn/index.vue";
import Input from "@cps/tool-form-item/mixins/input";

@Component({
  inheritAttrs: false,

  name: "RuleDatePicker",

  components: { RuleTextField, RuleBtn },
})
export default class RuleDatePicker extends Mixins(Input) {
  visible = false;

  @Watch("visible")
  @Emit()
  opened(_visible: boolean): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.$nextTick().then(() => {
        _visible && resolve(_visible);
      });
    });
  }
}
</script>
