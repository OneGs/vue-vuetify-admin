<template>
  <v-dialog v-model="visible" width="500px" ref="dialog">
    <template #activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <slot />
      </div>
    </template>

    <v-card>
      <v-card-title
        class="card-heading-padding d-flex align-center justify-space-between"
      >
        <div class="font-weight-semibold text-h3 text-typo">
          Type your modal title
        </div>
        <rule-btn
          icon
          :dynamic="false"
          x-small
          class="text-muted"
          @click="close"
        >
          <v-icon>mdi-close</v-icon>
        </rule-btn>
      </v-card-title>

      <v-card-text class="card-padding">
        <div class="text-body font-size-root font-weight-light mb-5">
          <slot name="text" />
        </div>
      </v-card-text>

      <div class="card-padding d-flex align-center justify-space-between">
        <rule-btn @click="save">Save Changes</rule-btn>
        <rule-btn plain :dynamic="false" class="font-weight-600" @click="close"
          >close</rule-btn
        >
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { RegisterBtn } from "@cps/the-mixins";

@Component({
  name: "DialogTips",
})
export default class DialogTips extends Mixins(RegisterBtn) {
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
