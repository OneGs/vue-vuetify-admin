<template>
  <v-card>
    <v-card-title class="card-heading-padding">
      <div class="text-h3 text-typo font-weight-semibold">Card Title</div>
    </v-card-title>

    <v-divider />

    <v-card-text class="card-padding">
      <p class="font-size-root lead font-weight-light text-muted mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non
        dolore est fuga nobis ipsum illum eligendi nemo iure repellat, soluta,
        optio minus ut reiciendis voluptates enim impedit veritatis officiis.
      </p>

      <div class="text-left">
        <rule-btn color="primary">Go somewhere</rule-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "CardDescribe",
})
export default class CardDescribe extends Vue {}
</script>

<style scoped></style>
