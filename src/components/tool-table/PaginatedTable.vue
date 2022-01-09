<template>
  <v-card class="text-body card-table paginated-table">
    <v-card-title class="d-flex align-center" v-if="!!title">
      <rule-title-h3>{{ title }}</rule-title-h3>
      <slot name="heading" />
    </v-card-title>

    <v-divider v-if="!!title" />

    <v-data-table
      class="table"
      :headers="headers"
      :items="_items"
      :page.sync="paging.index"
      hide-default-footer
    >
      <template #top>
        <div class="pa-4" v-if="$slots.top">
          <slot name="top" />
        </div>
      </template>

      <template v-for="key in headersIndex" #[`item.${key}`]="{ item }">
        <div :key="key" :class="bodyClass">
          <slot :name="`item.${key}`" :item="item"> {{ item[key] }} </slot>
        </div>
      </template>

      <template #footer>
        <v-pagination
          circle
          v-model="paging.index"
          :length.sync="pagingLen"
          class="py-2 elevation-0"
          total-visible="5"
        />
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import RuleTitleH3 from "@cps/rule-title/H3.vue";
import RuleTextField from "@cps/tool-form-item/TextField.vue";
import { LoopAny } from "@/types/common";
import { map } from "lodash";
import { DataStruct } from "@req/tool";

const ORIGIN_PROPS = Object.freeze({
  value: "data",
  index: "pageIndex",
  size: "pageSize",
  total: "pageTotal",
});

@Component({
  name: "PaginatedTable",

  components: {
    RuleTitleH3,
    RuleTextField,
  },
})
export default class PaginatedTable extends Vue {
  paging = { index: 1, size: 10 };

  pagingTotal = 0;

  @Prop({ type: String, default: "" }) title?: string;

  @Prop({ type: String, default: "" }) bodyClass?: string;

  @Prop({ type: Array, default: () => [], required: true })
  headers!: Array<LoopAny>;

  @Prop({ type: Array, default: () => [] }) items!: Array<LoopAny>;

  @Prop({ type: Array, default: () => [] }) params!: Array<LoopAny>;

  @Prop({ type: Function, default: null, required: true }) requestFun!: (
    config: LoopAny
  ) => DataStruct;

  @Prop({ type: Object, default: () => ({ ...ORIGIN_PROPS }) })
  responseStruct!: DataStruct;

  @Watch("paging", { deep: true })
  async flash(): Promise<void> {
    await this.flashTable();
  }

  /**
   * 挂载数据
   * @param _data { Object }
   */
  mountData(_data: DataStruct): void {
    const { value: valueKey } = this.responseStruct;

    // 没有提供value的解析key
    if (!valueKey)
      return console.error(
        new Error("responseProps中没有提供data属性, 无法解析数据")
      );

    // 解析后的数据不是一个数组
    if (!Array.isArray(_data[valueKey]))
      console.error(new Error(`数据格式不为数组：${typeof _data[valueKey]}`));

    this._items = _data[valueKey];
  }

  /**
   * 挂在分页
   * @param _data { Object }
   */
  mountPage(_data: DataStruct): void {
    const { total } = this.responseStruct;

    // 是否存在总数key
    if (!total) {
      return console.error(
        new Error(`responseProps中{ total: ${total} }未提供！ 无法解析总数`)
      );
    }

    // 检验是否和返回值一致
    if (![total].every((key) => Object.keys(_data).includes(key))) {
      return console.error(
        new Error(
          `response中{ total: ${total} }数据和提供数据[${Object.keys(
            _data
          )}]不匹配`
        )
      );
    }

    // 记录分页数据
    this.pagingTotal = _data[total];
  }

  /**
   * 刷新表格数据！
   * @function
   * @return { Object } _list axios返回的数据结构
   */
  async flashTable(mountPaging = false): Promise<DataStruct | void> {
    const { index, size } = this.responseStruct;

    if (!(index && size))
      return console.error(
        new Error(`索引index: ${index}, 大小size: ${size} 存在为空`)
      );

    const _list = await this.requestFun(
      Object.assign({ pageTotal: this.pagingTotal }, this.params, {
        [this.responseStruct.index]: this.paging.index,
        [this.responseStruct.size]: this.paging.size,
      })
    );

    this.mountData(_list);

    mountPaging && this.mountPage(_list);

    return _list;
  }

  get pagingLen(): number {
    return Math.floor(this.pagingTotal / this.paging.size);
  }

  get _items(): Array<LoopAny> {
    return this.items;
  }

  set _items(items: Array<LoopAny>) {
    this.$emit("update:items", items);
  }

  get headersIndex(): Array<string> {
    return map(this.headers, (item) => {
      return item.value.toLowerCase().replace(/\(.*\)/, "");
    });
  }

  async created(): Promise<void> {
    await this.flashTable(true);
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
