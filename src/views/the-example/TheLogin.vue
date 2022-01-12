<template>
  <component :is="'DemoLogin'" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta, RouteName } from "@/libs/auto-router";
import DemoLogin from "@cps/app-login/DemoLogin.vue";

@RouteName("Login")
@Meta({ title: "Login", order: 100, full: true })
@Component({
  name: "Login",

  components: {
    DemoLogin,
  },
})
export default class Login extends Vue {
  login(): void {
    localStorage.setItem("accessToken", "token");

    this.$router.push({ name: "Home" });
  }
}
</script>

<style scoped></style>
