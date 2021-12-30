<template>
  <component :is="'Argon'" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Moni from "@/layouts/components/Moni.vue";
import Argon from "@/layouts/components/Argon.vue";

@Component({
  name: "Layouts",

  components: {
    Moni,
    Argon,
  },
})
export default class Layouts extends Vue {}
</script>

<style scoped></style>
