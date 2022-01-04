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
        <v-col lg="4" class="px-0">
          <card-describe class="pa-0" />
        </v-col>
        <v-col lg="4">sss</v-col>
        <v-col lg="4">sss</v-col>
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

@Meta({ title: "面板", order: 100 })
@Component({
  name: "TheCard",
  components: { CardDescribe, CardTraffic },
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
}
</script>

<style scoped></style>
