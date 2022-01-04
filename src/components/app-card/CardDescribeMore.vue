<template>
  <v-card>
    <v-img
      src="https://demos.creative-tim.com/vuetify-argon-dashboard-pro/img/img-1-1000x600.c993e3af.jpg"
      alt="error"
      height="258px"
    />

    <v-list>
      <v-list-item class="font-size-root text-body"
        >Cras justo odio</v-list-item
      >
      <v-divider />
      <v-list-item class="font-size-root text-body"
        >Dapibus ac facilisis in</v-list-item
      >
      <v-divider />
      <v-list-item class="font-size-root text-body"
        >Vestibulum at eros
      </v-list-item>
      <v-divider />
    </v-list>

    <v-card-text class="card-padding">
      <v-card-title class="pt-0 px-0">
        <div class="text-h3 text-typo font-weight-semibold">{{ title }}</div>
      </v-card-title>

      <p
        class="font-size-root lead font-weight-light text-body mb-5 text-capitalize"
      >
        {{ message }}
      </p>

      <div class="text-left">
        <rule-btn color="primary">Go somewhere</rule-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "CardDescribeMore",
})
export default class CardDescribeMore extends Vue {
  @Prop({ type: String, default: "Card Title" }) title?: string;

  @Prop({ type: String, default: "nothing" }) message?: string;
}
</script>

<style scoped></style>
