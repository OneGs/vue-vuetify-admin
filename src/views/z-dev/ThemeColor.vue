<template>
  <div class="white">
    <div>
      <rule-h1> 亮色 </rule-h1>
      <v-divider />
      <div class="d-flex mt-6" style="margin: 1rem 0">
        <v-btn
          v-for="item in preset"
          :key="item"
          style="margin-left: 1rem"
          :color="item"
        >
          {{ item }}
        </v-btn>
      </div>
    </div>

    <div style="margin-top: 4rem">
      <rule-h1>暗色</rule-h1>
      <v-divider />
      <div class="d-flex mt-6" style="margin: 1rem 0">
        <v-btn
          v-for="item in preset"
          :key="item"
          style="margin-left: 1rem"
          :color="item"
          small
        >
          {{ item }}
        </v-btn>
      </div>
    </div>

    <div style="margin-top: 4rem; text-align: right">
      <v-btn @click="changeTheme" color="primary" style="margin-left: 1rem"
        >change theme</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({ title: "配色", order: 10 })
@Component({
  name: "ThemeColor",
})
export default class ThemeColor extends Vue {
  preset = [
    "primary",
    "secondary",
    "accent",
    "error",
    "info",
    "success",
    "warning",
    "default",
  ];

  changeTheme(): void {
    const darkTheme = this.$vuetify.theme.dark;

    this.$vuetify.theme.dark = !darkTheme;
  }
}
</script>

<style scoped></style>
