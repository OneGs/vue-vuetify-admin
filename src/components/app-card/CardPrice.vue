<template>
  <rule-card-template :dark="!isLightBg" :class="[`bg-gradient-${bgColor}`]">
    <template #text-outer>
      <v-card-title class="text-center">
        <div
          class="text-h3 text-capitalize pa-4"
          :class="[`${color}--text`]"
          style="width: 100%"
        >
          产品价格
        </div>
      </v-card-title>

      <v-divider dark />
    </template>

    <div class="text-center" :class="[{ 'text--white': !isLightBg }]">
      <div class="display-h-2 font-weight-bold">$49</div>
      <div class="font-size-root font-weight-regular">per application</div>
    </div>

    <v-list style="background-color: transparent !important" class="my-6">
      <v-row class="d-flex justify-center">
        <v-col cols="8" md="9" sm="12">
          <v-list-item
            v-for="(listInfo, index) in listItems.slice(0, 4)"
            :key="listInfo.text + index"
          >
            <v-avatar
              class="mr-2"
              :class="[`bg-gradient-${color}`]"
              width="24px"
              height="24px"
              min-width="24px"
            >
              <v-icon
                class="font-weight-light"
                :class="[
                  {
                    'text--white': !isLightColor,
                    'text-muted': isLightColor,
                  },
                ]"
                x-small
                v-text="listInfo.icon"
              />
            </v-avatar>
            <span
              class="text-body-2"
              :class="[{ 'text--white': !isLightBg, 'text-muted': isLightBg }]"
              >{{ listInfo.text }}</span
            >
          </v-list-item>
        </v-col>
      </v-row>
    </v-list>

    <div class="text-center my-4">
      <rule-btn>开始免费使用</rule-btn>
    </div>

    <v-divider dark class="mx-n6" />

    <template #text-outer:append>
      <div
        class="text-center text-body-2 font-size-root py-2 mt-n6"
        :class="[{ 'text--white': !isLightBg }]"
      >
        <p class="pa-4 mb-0">Request a demo</p>
      </div>
    </template>
  </rule-card-template>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from "vue-property-decorator";
import { RegisterBtn, RegisterCard } from "@cps/the-mixins";
import { LoopAny } from "@/types/common";

@Component({
  name: "CardPrice",
})
export default class CardPrice extends Mixins(RegisterBtn, RegisterCard) {
  @Prop({ type: String, default: "primary" }) color!: string;

  @Prop({ type: String, default: "white" }) bgColor!: string;

  @Prop({
    type: Array,
    default: () => [
      { text: "Complete documentation", icon: "mdi-at" },
      { text: "Working materials in Sketch", icon: "mdi-shaker" },
      { text: "2GB cloud storage", icon: "mdi-sd" },
    ],
  })
  listItems!: Array<LoopAny>;

  get isLightBg(): boolean {
    if (!this.bgColor) return true;

    return !["success", "danger", "info", "warning", "primary"].includes(
      this.bgColor
    );
  }

  get isLightColor(): boolean {
    if (!this.color) return true;

    return !["success", "danger", "info", "warning", "primary"].includes(
      this.color
    );
  }
}
</script>

<style scoped></style>
