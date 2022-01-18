<template>
  <div>
    <v-row class="mb-6">
      <v-col
        v-for="item in traffics"
        :key="item.title + item.count"
        cols="12"
        lg="3"
        md="6"
        class="py-0"
      >
        <card-traffic v-bind="item" />
      </v-col>
    </v-row>

    <v-container fluid>
      <v-row>
        <v-col lg="4" class="pl-0 py-0">
          <card-describe-more class="mb-6" :message="message" />

          <card-describe class="pa-0 mb-6" :message="message" />

          <card-user
            avatar="https://demos.creative-tim.com/vuetify-argon-dashboard-pro/img/team-4.66618a41.jpg"
          >
            <div class="text-h5 text-typo font-weight-600 mt-5">
              Solution Manager - Creative Tim Officer
            </div>

            <div class="text-body font-size-root mt-3">
              University of Computer Science
            </div>
          </card-user>
        </v-col>

        <v-col lg="4" class="py-0">
          <card-describe class="mb-6" :message="message" />

          <rule-card-template>
            <v-row class="d-flex align-center">
              <v-col cols="9" class="d-flex align-center px-0">
                <v-avatar width="70px" height="70px">
                  <v-img src="@/assets/user.png" />
                </v-avatar>
                <div class="ml-4">
                  <rule-title-h3> John Snow </rule-title-h3>
                  <div class="text-muted my-2 text-capitalize">
                    Working Remotely
                  </div>
                </div>
              </v-col>

              <v-col cols="3" class="text-right px-0">
                <rule-btn x-small>add</rule-btn>
              </v-col>
            </v-row>
          </rule-card-template>

          <rule-card-template class="mt-6">
            <div class="text-center">
              <v-avatar width="140px" height="140px">
                <v-img src="@/assets/user.png" />
              </v-avatar>
              <rule-title-h3 class="mt-4"> Ryan Tompson </rule-title-h3>
              <div class="text-muted my-2">WEb Developer</div>
            </div>
          </rule-card-template>

          <rule-card-template class="default mt-6">
            <v-card-title class="pt-0 px-0">
              <rule-title-h3 style="color: #fff !important">
                TestiMonial
              </rule-title-h3>
            </v-card-title>

            <p style="color: #fff !important">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <p class="text-danger mb-0 text-right">
              -- Someone famous in Source Title
            </p>
          </rule-card-template>

          <rule-card-template class="bg-gradient-danger mt-6">
            <v-card-title class="pt-0 px-0">
              <rule-title-h3 style="color: #fff !important">
                TestiMonial
              </rule-title-h3>
            </v-card-title>

            <p style="color: #fff !important">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <p class="text-default mb-0 text-right">
              -- Someone famous in Source Title
            </p>
          </rule-card-template>

          <rule-card-template class="bg-gradient-warning mt-6">
            <v-card-title class="pt-0 px-0">
              <rule-title-h3 style="color: #fff !important">
                TestiMonial
              </rule-title-h3>
            </v-card-title>

            <p style="color: #fff !important">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <p class="text-default mb-0 text-right">
              -- Someone famous in Source Title
            </p>
          </rule-card-template>

          <rule-card-template class="bg-gradient-secondary mt-6">
            <v-card-title class="pt-0 px-0">
              <rule-title-h3> TestiMonial </rule-title-h3>
            </v-card-title>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <p class="text-muted mb-0 text-right">
              -- Someone famous in Source Title
            </p>
          </rule-card-template>
        </v-col>

        <v-col lg="4" class="py-0 pr-0">
          <card-price />

          <card-describe class="mt-6" :message="message" />

          <card-price bg-color="success" color="white" class="mt-6" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Mixins } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router";
import CardTraffic from "@cps/app-card/CardTraffic.vue";
import Argon from "@/layouts/components/Argon.vue";
import CardDescribe from "@cps/app-card/CardDescribe.vue";
import CardDescribeMore from "@cps/app-card/CardDescribeMore.vue";
import CardUser from "@cps/app-card/CardUser.vue";
import CardPrice from "@cps/app-card/CardPrice.vue";
import { RegisterBtn, RegisterCard, RegisterHeading } from "@cps/the-mixins";

@Meta({ title: "Cards", order: 100 })
@Component({
  name: "TheCard",
  components: {
    CardPrice,
    CardUser,
    CardDescribeMore,
    CardDescribe,
    CardTraffic,
  },
})
export default class TheCard extends Mixins(
  RegisterBtn,
  RegisterCard,
  RegisterHeading
) {
  @Inject("argon") argon!: Argon;

  created(): void {
    if (!this.argon) return;

    this.argon.breadcrumbsPadding = 150 + 64 + "px";
  }

  traffics = [
    {
      title: "total",
      count: "350,897",
      tip: "30%",
      describe: "Since last month",
      color: "danger",
    },
    {
      title: "new user",
      count: "560",
      tip: "10%",
      describe: "Since last month",
      color: "warning",
    },
    {
      title: "sale count",
      count: "1,560",
      tip: "3.14%",
      describe: "Since last month",
      color: "success",
    },
    {
      title: "PERFORMANCE",
      count: "49,65%",
      tip: "...",
      describe: "Since last month",
    },
  ];

  message =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est fuga nobis ipsum illum eligendi nemo iure repellat, soluta, optio minus ut reiciendis voluptates enim impedit veritatis officiis.";
}
</script>

<style scoped></style>
