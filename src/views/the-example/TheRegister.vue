<template>
  <component :is="'DemoRegister'" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DemoRegister from "@cps/app-register/DemoReigster.vue";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";

@Meta({ title: "Register", order: 90, full: true })
@Component({
  name: "TheRegister",

  components: {
    DemoRegister,
  },
})
export default class TheRegister extends Vue {}
</script>

<style scoped></style>
