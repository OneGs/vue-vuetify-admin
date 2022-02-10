<template>
  <div class="d-flex align-center white--text">
    <rule-title-h2
      style="color: #fff !important; transform: translateY(-1.5px)"
      class="py-4"
    >
      {{ nameTitle }}
    </rule-title-h2>

    <rule-btn
      color="#fff"
      small
      icon="mdi-home"
      @click="$router.push({ name: 'Home' })"
    />

    <span class="white--text mx-1">-</span>

    <v-breadcrumbs :items="matches" divider="-" class="pl-1" />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { BreadItems } from "./breadcrumbs";
import { RegisterBtn, RegisterHeading } from "@cps/the-mixins";

@Component({
  name: "AppBreadcrumbs",
})
export default class AppBreadcrumbs extends Mixins(
  RegisterHeading,
  RegisterBtn
) {
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
      if (match.name?.includes("RootLayout") || match.meta.hiddenTag) return;

      result.push({
        text: match.meta?.title || "no",
        to: match.name,
        disabled: matched.length === index + 1,
      });
    });

    return result;
  }
}
</script>

<style scoped></style>
