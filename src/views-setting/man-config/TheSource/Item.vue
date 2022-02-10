<template>
  <div class="source-item common-table">
    <rule-card-template>
      <div
        class="d-flex align-center justify-center text-typo position-relative elevation-0"
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

    <rule-card-template class="mt-4">
      <template #title>
        <div class="d-flex align-center justify-space-between w-full">
          <div class="font-size-small text-muted font-weight-400">
            为数据源【工时类别】配置数据项
          </div>

          <task-source-item-add-dialog :id="propertyId" @submit-success="flash">
            <rule-btn small>新建数据项</rule-btn>
          </task-source-item-add-dialog>
        </div>
      </template>

      <v-data-table
        hide-default-footer
        :headers="headers"
        :items.sync="items"
        class="text-body font-weight-400"
      >
        <template #item.actions="{ item }">
          <div class="d-flex align-center justify-center">
            <task-source-item-edit-dialog
              :data="item"
              :id="propertyId"
              @submit-success="flash"
            >
              <rule-btn small color="default" icon="mdi-pencil" />
            </task-source-item-edit-dialog>

            <task-source-item-delete-dialog
              :item="item"
              :id="propertyId"
              @submit-success="flash"
            />
          </div>
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
import TaskSourceItemDeleteDialog from "@/views-setting/man-config/components/taskSource/TaskSourceItemDeleteDialog.vue";
import TaskSourceItemAddDialog from "@/views-setting/man-config/components/taskSource/TaskSourceItemAddDialog";
import TaskSourceItemEditDialog from "@/views-setting/man-config/components/taskSource/TaskSourceItemEditDialog";

@Context("propertyId")
@Meta({ title: "数据项", hidden: true })
@Component({
  name: "SourceItem",
  components: {
    TaskSourceItemDeleteDialog,
    TaskSourceItemAddDialog,
    TaskSourceItemEditDialog,
  },
})
export default class SourceItem extends Mixins(RegisterAll) {
  items: taskSourceItemResponse[] = [];

  headers: AutoDataTableHeader[] = [
    { text: "文本", value: "text", sortable: false },
    { text: "值", value: "value", width: 200 },
    {
      text: "操作",
      value: "actions",
      width: 150,
      align: "center",
      sortable: false,
    },
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
