<template>
  <v-card class="position-relative">
    <v-img
      src="https://demos.creative-tim.com/vuetify-argon-dashboard-pro/img/img-1-1000x600.c993e3af.jpg"
      alt="error"
      height="258px"
    />

    <div class="position-relative">
      <v-avatar class="avatar-user" height="140px" width="140px">
        <v-img
          src="https://demos.creative-tim.com/vuetify-argon-dashboard-pro/img/team-4.66618a41.jpg"
        />
      </v-avatar>
    </div>

    <div class="card-padding text-center">
      <div class="d-flex justify-space-between">
        <rule-btn color="info" x-small :ripple="false">Connect</rule-btn>
        <rule-btn color="default" x-small :ripple="false">Message</rule-btn>
      </div>
    </div>

    <v-card-text class="card-padding">
      <v-row class="text-center d-flex justify-center">
        <v-col
          cols
          class="col-auto"
          v-for="info in baseInfo"
          :key="info.text + info.count"
        >
          <div class="text-body font-weight-bold text-h3 mb-1">
            {{ info.count }}
          </div>
          <div class="text-body-2 text-muted">{{ info.text }}</div>
        </v-col>
      </v-row>

      <div class="text-center mt-4">
        <div class="text-h3 text-typo font-weight-semibold mb-2">
          <span>Jessica Jones</span>, <span class="font-weight-light">24</span>
        </div>

        <div class="text-h5 text-typo font-weight-light">
          <span>李</span>, <span>小贵</span>
        </div>

        <div class="text-h5 text-typo font-weight-600 mt-5">
          Solution Manager - Creative Tim Officer
        </div>

        <div class="text-body font-size-root mt-3">
          University of Computer Science
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "CardUser",
})
export default class CardUser extends Vue {
  @Prop({ type: String, default: "Card Title" }) title?: string;

  @Prop({ type: String, default: "nothing" }) message?: string;

  baseInfo = [
    { text: "Friends", count: 200 },
    { text: "Photo", count: 200 },
    { text: "comments", count: 200 },
  ];
}
</script>

<style scoped lang="scss">
.avatar-user {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(-50%) scale(1);
  border: 3px solid #fff;
}
</style>
