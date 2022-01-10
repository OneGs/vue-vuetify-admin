<template>
  <v-row>
    <v-col cols="8" class="mx-auto">
      <rule-card-template title="Alerts">
        <rule-notification :color="item" v-for="item in preset" :key="item">
          <strong>{{ item }}!</strong> This is a default alert—check it
          out!</rule-notification
        >
      </rule-card-template>

      <rule-card-template class="mt-6" title="Modals">
        <v-row>
          <v-col>
            <dialog-tips>
              <rule-btn block>Default</rule-btn>

              <template #text>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </template>
            </dialog-tips>
          </v-col>

          <v-col>
            <dialog-notification>
              <rule-btn color="warning" block>Notification</rule-btn>

              <template #text>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </template>
            </dialog-notification>
          </v-col>

          <v-col>3</v-col>
        </v-row>
      </rule-card-template>

      <rule-card-template class="mt-6" title="Notifications">
        <rule-btn
          v-for="btn in btnNotify"
          :key="btn + 'btn'"
          :color="btn"
          class="mr-2"
          @click="clickNotify(btn)"
          >{{ btn }}</rule-btn
        >
      </rule-card-template>

      <rule-card-template class="mt-6" title="Sweet Alerts">
        <dialog-sweet v-for="btn in btnNotify" :key="btn + 'btn'">
          <rule-btn :color="btn" class="mr-2">{{ btn }}</rule-btn>
        </dialog-sweet>
      </rule-card-template>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import DialogTips from "@cps/app-dialog/DialogTips.vue";
import DialogNotification from "@cps/app-dialog/DialogNotification.vue";
import DialogSweet from "@cps/app-dialog/DialogSweet.vue";
import {
  RegisterBtn,
  RegisterCard,
  RegisterNotification,
} from "@cps/the-mixins";

@Meta({ title: "Notifications", order: 30 })
@Component({
  name: "TheNotifications",
  components: { DialogSweet, DialogNotification, DialogTips },
})
export default class TheNotifications extends Mixins(
  RegisterBtn,
  RegisterCard,
  RegisterNotification
) {
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
