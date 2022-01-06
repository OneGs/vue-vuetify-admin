<template>
  <div>
    <v-card>
      <v-card-title class="">
        <div>Form group in grid</div>
      </v-card-title>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";

@Meta({ title: "Elements", order: 100 })
@Component({
  name: "TheElements",
})
export default class Elements extends Vue {}
</script>

<style scoped></style>
