<template>
  <v-row>
    <v-col cols="8" class="mx-auto pt-0">
      <v-card>
        <v-card-title>
          <rule-h1>颜色主题</rule-h1>
        </v-card-title>

        <v-divider />

        <v-card-title>
          <rule-h2> 亮色 </rule-h2>
        </v-card-title>

        <div class="d-flex mt-6 flex-wrap" style="margin: 1rem 0">
          <v-btn
            v-for="item in preset"
            :key="item"
            style="margin-left: 1rem"
            :color="item"
            class="mb-4"
          >
            {{ item }}
          </v-btn>
        </div>

        <v-divider />

        <v-card-title>
          <rule-h2>暗色</rule-h2>
        </v-card-title>

        <div class="d-flex mt-6 pb-4 flex-wrap" style="margin: 1rem 0">
          <v-btn
            v-for="item in preset"
            :key="item"
            style="margin-left: 1rem"
            :color="item"
            small
            class="mb-4"
          >
            {{ item }}
          </v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({
  title: "配色",
  order: 10,
  icon: "mdi-eyedropper-variant",
  color: "blue lighten-2",
})
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
