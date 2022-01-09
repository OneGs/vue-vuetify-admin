<template>
  <v-card class="text-body card-table paginated-table">
    <v-card-title class="d-flex align-center">
      <rule-title-h3>{{ title }}</rule-title-h3>
      <slot name="heading" />
    </v-card-title>

    <v-divider />

    <v-data-table
      class="table"
      :headers="headers"
      :items="items"
      :page.sync="_page"
      hide-default-footer
    >
      <template #top>
        <div class="pa-4">
          <slot name="top" />
        </div>
      </template>

      <template v-for="key in headersIndex" #[`item.${key}`]="{ item }">
        <div :key="key">
          <slot :name="`item.${key}`" :item="item" />
        </div>
      </template>

      <template #footer>
        <v-pagination
          circle
          v-model="_page"
          :length="4"
          class="py-2 elevation-0"
          total-visible="10"
        />
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import RuleTitleH3 from "@cps/rule-title/H3.vue";
import RuleTextField from "@cps/tool-form-item/TextField.vue";
import { LoopAny } from "@/types/common";
import { map } from "lodash";

@Component({
  name: "PaginatedTable",

  components: {
    RuleTitleH3,
    RuleTextField,
  },
})
export default class PaginatedTable extends Vue {
  @Prop({ type: String, default: "" }) title?: string;

  @Prop({ type: Number, default: 1 }) page?: number;

  @Prop({ type: Array, default: () => [] }) headers!: Array<LoopAny>;

  @Prop({ type: Array, default: () => [] }) items!: Array<LoopAny>;

  get _page(): number {
    return this.page || 1;
  }

  set _page(page: number) {
    this.$emit("update:page", page);
  }

  get headersIndex(): Array<string> {
    return map(this.headers, (item) => {
      return item.text.toLowerCase().replace(/\(.*\)/, "");
    });
  }
}
</script>

<style lang="scss">
.paginated-table {
  .v-pagination {
    justify-content: flex-end !important;
  }

  .v-pagination__item,
  .v-pagination__navigation {
    box-shadow: none;
    border: 1px solid #dee2e6;
  }
}
</style>
