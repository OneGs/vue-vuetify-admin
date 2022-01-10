<template>
  <v-dialog v-model="visible" width="500px" ref="dialog">
    <template #activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <slot />
      </div>
    </template>

    <rule-card-template>
      <template #title>
        <div class="d-flex align-center justify-space-between w-full">
          <rule-title-h3> Type your modal title </rule-title-h3>
          <rule-btn
            icon
            :dynamic="false"
            x-small
            class="text-muted"
            @click="close"
          >
            <v-icon>mdi-close</v-icon>
          </rule-btn>
        </div>
      </template>

      <div class="text-body font-size-root font-weight-light mb-5">
        <slot name="text" />
      </div>

      <template #text-outer:append>
        <div class="card-padding d-flex align-center justify-space-between">
          <rule-btn @click="save">Save Changes</rule-btn>
          <rule-btn
            plain
            :dynamic="false"
            class="font-weight-600"
            @click="close"
            >close</rule-btn
          >
        </div>
      </template>
    </rule-card-template>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { RegisterBtn, RegisterCard, RegisterHeading } from "@cps/the-mixins";

@Component({
  inheritAttrs: false,

  name: "DialogTips",
})
export default class DialogTips extends Mixins(
  RegisterBtn,
  RegisterCard,
  RegisterHeading
) {
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
