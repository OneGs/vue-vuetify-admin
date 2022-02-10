<template>
  <div class="source-item common-table">
    <rule-card-template>
      <div
        class="d-flex align-center justify-center bg-white text-typo position-relative"
      >
        <rule-btn
          plain
          small
          class="position-absolute"
          style="right: 0"
          color="secondary"
          @click="$router.back()"
          ><v-icon small left>mdi-arrow-left-thin</v-icon>返回</rule-btn
        >

        <rule-title-h3>数据源配置</rule-title-h3>
      </div>
    </rule-card-template>

    <rule-card-template class="mt-6">
      <template #title>
        <div class="d-flex align-center justify-space-between w-full">
          <div class="font-size-small text-muted font-weight-light">
            为数据源【工时类别】配置数据项
          </div>

          <rule-btn small>新建数据项</rule-btn>
        </div>
      </template>

      <v-data-table
        hide-default-footer
        :headers="headers"
        :items.sync="items"
        class="text-body font-weight-semibold"
      >
        <template #actions="{ item }">
          {{ item }}
        </template>
      </v-data-table>
    </rule-card-template>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Meta, Context } from "@/libs/auto-router";
import { RegisterAll } from "@cps/the-mixins";
import { AutoDataTableHeader } from "@cps/tool-form/autoRender";
import { taskSourceItemList } from "@req/apis/zRisker/taskSource";
import { taskSourceItemResponse } from "@/types/taskSource";

@Context("propertyId")
@Meta({ title: "数据项", hidden: true })
@Component({
  name: "SourceItem",
})
export default class SourceItem extends Mixins(RegisterAll) {
  items: taskSourceItemResponse[] = [];

  headers: AutoDataTableHeader[] = [
    { text: "文本", value: "text" },
    { text: "值", value: "value", width: 200 },
    { text: "操作", value: "actions", width: 150, align: "center" },
  ];

  get propertyId(): number {
    return parseInt(this.$route.params["propertyId"]);
  }

  async flash(): Promise<void> {
    this.items = await taskSourceItemList(this.propertyId);
  }

  async created(): Promise<void> {
    await this.flash();
  }
}
</script>
