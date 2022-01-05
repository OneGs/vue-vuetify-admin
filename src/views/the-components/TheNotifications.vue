<template>
  <v-row>
    <v-col cols="8" class="mx-auto">
      <v-card>
        <v-card-title>
          <div class="text-h3 text-typo font-weight-semibold">Alerts</div>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <rule-notification :color="item" v-for="item in preset" :key="item">
            <strong>{{ item }}!</strong> This is a default alert—check it
            out!</rule-notification
          >
        </v-card-text>
      </v-card>

      <v-card class="mt-6">
        <v-card-title>
          <div class="text-h3 text-typo font-weight-600">Notifications</div>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <rule-btn
            v-for="btn in btnNotify"
            :key="btn + 'btn'"
            :color="btn"
            class="mr-2"
            @click="clickNotify(btn)"
            >{{ btn }}</rule-btn
          >
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";

@Meta({ title: "Notifications", order: 30 })
@Component({
  name: "TheNotifications",
})
export default class TheNotifications extends Vue {
  preset = [
    "default",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
  ];

  btnNotify = ["default", "info", "success", "warning", "error"];

  clickNotify(type: string): void {
    this.$notify({
      type,
      message: "Turning standard Vuetify alerts into awesome notifications",
    });
  }
}
</script>

<style scoped></style>
