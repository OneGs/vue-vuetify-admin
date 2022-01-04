<template>
  <div class="d-flex align-center white--text">
    <h1
      class="font-weight-semibold white--text text-h1 text-capitalize mr-4"
      style="transform: translateY(-3px)"
    >
      {{ nameTitle }}
    </h1>

    <v-btn color="#fff" small icon @click="$router.push({ name: 'Home' })">
      <v-icon v-text="'mdi-home'" />
    </v-btn>

    <span class="white--text mx-1">-</span>

    <v-breadcrumbs :items="matches" divider="-" class="pl-1" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BreadItems } from "./breadcrumbs";

@Component({
  name: "AppBreadcrumbs",
})
export default class AppBreadcrumbs extends Vue {
  get nameTitle(): string {
    const { title: name } = this.$route.meta || {};

    if (!name) return "name";

    return name;
  }

  get matches(): BreadItems[] {
    const { matched } = this.$route;

    if (!matched.length) return [];

    const result: BreadItems[] = [];

    matched.forEach((match, index) => {
      if (match.name === "RootLayout") return;

      console.log(this.$route);

      result.push({
        text: match.meta?.title || "no",
        to: match.name,
        disabled: matched.length === index + 1,
      });
    });

    console.log(result);

    return result;
  }
}
</script>

<style scoped></style>
