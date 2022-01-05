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
        <v-col lg="4" class="px-0 py-0">
          <card-describe-more class="mb-6" :message="message" />

          <card-describe class="pa-0 mb-6" :message="message" />

          <card-user />
        </v-col>
        <v-col lg="4" class="py-0">
          <card-describe class="mb-6" :message="message" />

          <v-card class="card-padding">
            <v-card-text>
              <v-row class="d-flex align-center">
                <v-col cols="9" class="d-flex align-center px-0">
                  <v-avatar width="70px" height="70px">
                    <v-img src="@/assets/user.png" />
                  </v-avatar>
                  <div class="ml-4">
                    <div
                      class="text-h3 text-typo font-weight-semibold text-capitalize"
                    >
                      John Snow
                    </div>
                    <div class="text-body text-muted my-2 text-capitalize">
                      Working Remotely
                    </div>
                  </div>
                </v-col>
                <v-col cols="3" class="text-right px-0">
                  <rule-btn x-small>add</rule-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card class="mt-6">
            <v-card-text class="text-center">
              <v-avatar width="140px" height="140px">
                <v-img src="@/assets/user.png" />
              </v-avatar>
              <div class="text-h3 text-typo font-weight-semibold mt-4">
                Ryan Tompson
              </div>
              <div class="text-body text-muted my-2">WEb Developer</div>
            </v-card-text>
          </v-card>

          <v-card class="card-padding default mt-6">
            <v-card-title>
              <div class="text-h3 font-weight-semibold" style="color: #fff">
                TestiMonial
              </div>
            </v-card-title>

            <v-card-text>
              <p
                class="text-body font-size-root font-weight-light"
                style="color: #fff !important"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <p class="text-danger font-size-root mb-0 text-capitalize">
                -- Someone famous in Source Title
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg="4" class="py-0">
          <card-price />

          <card-describe class="mt-6" :message="message" />

          <card-price bg-color="success" color="white" class="mt-6" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";
import CardTraffic from "@/components/app-card/CardTraffic.vue";
import Argon from "@/layouts/components/Argon.vue";
import CardDescribe from "@/components/app-card/CardDescribe.vue";
import CardDescribeMore from "@/components/app-card/CardDescribeMore.vue";
import CardUser from "@/components/app-card/CardUser.vue";
import CardPrice from "@/components/app-card/CardPrice.vue";

@Meta({ title: "面板", order: 100 })
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
export default class TheCard extends Vue {
  @Inject("argon") argon?: Argon;

  created(): void {
    if (!this.argon) return;

    this.argon.breadcrumbsPadding = 150 + 64 + "px";
  }

  traffics = [
    {
      title: "总量统计",
      count: "350,897",
      tip: "30%",
      describe: "持续销售中...",
      color: "danger",
    },
    {
      title: "新用户",
      count: "560",
      tip: "10%",
      describe: "环比上升幅度较小",
      color: "warning",
    },
    {
      title: "销售额",
      count: "1,560",
      tip: "3.14%",
      describe: "从上个月以来",
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
