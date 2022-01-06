<template>
  <v-dialog v-model="visible" width="500px" ref="dialog">
    <template #activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <slot />
      </div>
    </template>

    <v-card class="bg-gradient-danger">
      <v-card-title
        class="card-heading-padding d-flex align-center justify-space-between"
      >
        <div class="font-weight-semibold text-h3 text--white">
          Your Attention is required
        </div>
        <rule-btn
          icon
          :dynamic="false"
          x-small
          class="text-white"
          color=""
          @click="close"
        >
          <v-icon>mdi-close</v-icon>
        </rule-btn>
      </v-card-title>

      <v-card-text class="card-padding">
        <div
          class="text-body font-root-size font-weight-light mb-5 text-center"
        >
          <v-icon class="text-white" large>mdi-bell</v-icon>
          <div class="heading mt-6 text-white font-weight-600 text-uppercase">
            YOU SHOULD READ THIS!
          </div>
          <div class="text-white font-size-root font-weight-thin mt-3">
            <slot name="text" />
          </div>
        </div>
      </v-card-text>

      <div class="card-padding d-flex align-center justify-space-between">
        <rule-btn
          @click="save"
          color="secondary"
          class="font-weight-600 text-capitalize"
          >ok, got it</rule-btn
        >
        <rule-btn
          plain
          :dynamic="false"
          class="font-weight-600 text-white"
          color=""
          @click="close"
          >close</rule-btn
        >
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "DialogNotification",
})
export default class DialogNotification extends Vue {
  visible = false;

  close(): void {
    this.visible = false;
  }

  save(): void {
    console.log("save");
  }
}
</script>

<style scoped></style>
