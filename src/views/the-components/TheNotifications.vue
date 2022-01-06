<template>
  <v-row>
    <v-col cols="8" class="mx-auto">
      <v-card>
        <v-card-title class="card-heading-padding">
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
        <v-card-title class="card-heading-padding">
          <div class="text-h3 text-typo font-weight-semibold">Modals</div>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <v-row>
            <v-col>
              <dialog-tips>
                <rule-btn block>Default</rule-btn>

                <template #text>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </template>
              </dialog-tips>
            </v-col>
            <v-col>
              <dialog-notification>
                <rule-btn color="warning" block>Notification</rule-btn>

                <template #text>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </template>
              </dialog-notification>
            </v-col>
            <v-col>3</v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card class="mt-6">
        <v-card-title class="card-heading-padding">
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

      <v-card class="mt-6">
        <v-card-title class="card-heading-padding">
          <div class="text-h3 text-typo font-weight-600">Sweet Alerts</div>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <dialog-sweet v-for="btn in btnNotify" :key="btn + 'btn'">
            <rule-btn :color="btn" class="mr-2">{{ btn }}</rule-btn>
          </dialog-sweet>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";
import DialogTips from "@/components/app-dialog/DialogTips.vue";
import DialogNotification from "@/components/app-dialog/DialogNotification.vue";
import DialogSweet from "@/components/app-dialog/DialogSweet.vue";

@Meta({ title: "Notifications", order: 30 })
@Component({
  name: "TheNotifications",
  components: { DialogSweet, DialogNotification, DialogTips },
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
