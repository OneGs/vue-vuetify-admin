<template>
  <div>
    this is login
    <button @click="login" style="background: #20a0ff">login</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RouteName } from "ea-router";

@RouteName("Login")
@Component({
  name: "Login",
})
export default class Login extends Vue {
  login(): void {
    localStorage.setItem("accessToken", "token");

    this.$router.push({ name: "Home" });
  }
}
</script>

<style scoped></style>
