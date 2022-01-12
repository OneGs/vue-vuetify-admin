<template>
  <component :is="'DemoLogin'" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta, RouteName } from "@/libs/auto-router";
import DemoLogin from "@cps/app-login/DemoLogin.vue";

@RouteName("loginView")
@Meta({ title: "Login", order: 100, full: true })
@Component({
  components: {
    DemoLogin,
  },
})
export default class Login extends Vue {}
</script>

<style scoped></style>
