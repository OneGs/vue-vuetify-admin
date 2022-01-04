<template>
  <v-row>
    <v-col cols="8" class="mx-auto">
      <v-card class="card-shadow">
        <v-card-title class="card-heading-padding">
          <h3 class="text-h3 text-typo">样式</h3>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <rule-btn color="primary" class="btn-height">按钮</rule-btn>
          <rule-btn color="primary" class="ml-2 btn-height">
            <v-icon left>mdi-format-paint</v-icon>
            按钮</rule-btn
          >
          <rule-btn color="primary" class="ml-2 btn-height">
            <v-icon dense>mdi-cog-outline</v-icon>
          </rule-btn>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="8" class="mx-auto">
      <v-card class="card-shadow">
        <v-card-title class="card-heading-padding">
          <h3 class="text-h3 text-typo">颜色</h3>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <rule-btn
            :color="color"
            v-for="color in preset"
            :key="color"
            class="my-2 me-2 btn-height text-capitalize"
            >{{ color }}</rule-btn
          >
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="8" class="mx-auto">
      <v-card class="card-shadow">
        <v-card-title class="card-heading-padding">
          <h3 class="text-h3 text-typo">外边框</h3>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <rule-btn
            :color="color"
            v-for="color in preset"
            :key="color"
            outlined
            class="my-2 me-2 btn-height text-capitalize font-weight-semibold"
            >{{ color }}</rule-btn
          >
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="8" class="mx-auto">
      <v-card class="card-shadow">
        <v-card-title class="card-heading-padding">
          <h3 class="text-h3 text-typo">大小</h3>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding">
          <rule-btn class="text-capitalize" large style="height: 51px"
            >Large Button</rule-btn
          >
          <rule-btn
            class="text-capitalize ml-2"
            large
            style="height: 51px"
            color="secondary"
            >大按钮</rule-btn
          >

          <v-divider class="my-8" />

          <rule-btn class="text-capitalize" small style="line-height: 1"
            >small Button</rule-btn
          >
          <rule-btn class="text-capitalize ml-2" small color="secondary"
            >小按钮</rule-btn
          >

          <v-divider class="my-8" />

          <rule-btn class="text-capitalize" large block>block 按钮</rule-btn>

          <rule-btn class="text-capitalize mt-2" color="secondary" large block
            >block 按钮</rule-btn
          >
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="8" class="mx-auto">
      <v-card class="card-shadow">
        <v-card-title class="card-heading-padding">
          <h3 class="text-h3 text-typo">组</h3>
        </v-card-title>

        <v-divider />

        <v-card-text class="card-padding text-capitalize">
          <v-btn-toggle tile borderless>
            <v-btn value="left" :ripple="false"> Left </v-btn>

            <v-btn value="center" :ripple="false"> Center </v-btn>

            <v-btn value="right" :ripple="false"> Right </v-btn>

            <v-btn value="justify" :ripple="false"> Justify </v-btn>
          </v-btn-toggle>

          <v-divider class="my-8" />

          <v-btn-toggle borderless>
            <rule-btn value="left" :ripple="false" color="default">
              Left
            </rule-btn>

            <rule-btn value="center" :ripple="false" color="default">
              Center
            </rule-btn>

            <rule-btn value="right" :ripple="false" color="default">
              Right
            </rule-btn>

            <rule-btn value="justify" :ripple="false" color="default">
              Justify
            </rule-btn>
          </v-btn-toggle>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";

@Meta({
  title: "按钮",
  order: 100,
})
@Component({
  name: "TheButton",
})
export default class TheButton extends Vue {
  preset = [
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
    "default",
  ];
}
</script>

<style scoped lang="scss">
.btn {
  &:not(:first-child) {
    margin-left: 12px;
  }

  &-height {
    //    height: 43px !important;
  }
}
</style>
