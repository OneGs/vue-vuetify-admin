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
        append-icon="mdi-calendar"
        readonly
        class="cursor-pointer"
        v-on="on"
        v-bind="attrs"
      />
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
import { Vue, Component, Emit, Watch } from "vue-property-decorator";
import RuleTextField from "@cps/tool-form-item/TextField.vue";
import RuleBtn from "@cps/rule-btn/index.vue";
import moment from "moment";

@Component({
  inheritAttrs: false,

  name: "RuleDatePicker",

  components: { RuleTextField, RuleBtn },
})
export default class RuleDatePicker extends Vue {
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
