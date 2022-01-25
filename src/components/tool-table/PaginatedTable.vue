<template>
  <v-card class="text-body card-table paginated-table">
    <v-card-title class="d-flex align-center" v-if="!!title">
      <rule-title-h3>{{ title }}</rule-title-h3>
      <div class="ml-4 flex-grow-1">
        <slot name="heading" v-bind:pageQuery="pageQuery" />
      </div>
    </v-card-title>

    <v-divider v-if="!!title" />

    <v-data-table
      class="table"
      :headers="_headers"
      :items.sync="_items"
      :page.sync="paging.index"
      hide-default-footer
    >
      <template #top>
        <div class="pa-4" v-if="$slots.top">
          <slot name="top" />
        </div>
      </template>

      <template v-for="key in headersSlotName" #[`item.${key}`]="{ item }">
        <div :key="key" :class="bodyClass">
          <slot :name="`item.${key}`" :item="item">
            <span v-if="!isEditable(key)">
              {{ item[key] }}
            </span>

            <v-edit-dialog
              v-else
              persistent
              :return-value.sync="item[key]"
              @save="editDialogSave(item)"
              @close="editDialogClose(item)"
            >
              {{ item[key] }}
              <template v-slot:input>
                <tool-sample-auto-render
                  v-model="item[key]"
                  :mode="modes(key)"
                  class="mt-4 d-inline-block w-full"
                />
              </template>
            </v-edit-dialog>
          </slot>
        </div>
      </template>

      <template #footer>
        <v-pagination
          circle
          @input="_flash"
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
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import RuleTitleH3 from "@cps/rule-title/H3.vue";
import RuleTextField from "@cps/tool-form-item/TextField.vue";
import { LoopAny } from "@/types/common";
import { Debounce } from "lodash-decorators";
import { map, omit } from "lodash";
import ToolAutoRender from "@cps/tool-form/AutoRender.vue";
import {
  AutoDataTableHeader,
  AutoRenderSampleForm,
} from "@cps/tool-form/autoRender";
import ToolForm from "@cps/tool-form/index.vue";
import ToolFormItem from "@cps/tool-form-item/index.vue";
import ToolSampleAutoRender from "@cps/tool-form/SampleAutoRender.vue";
import { zRiskerResponseItem } from "@/types/zRisker";

const ORIGIN_PROPS = Object.freeze({
  value: "items",
  index: "pageNumber",
  size: "pageSize",
  total: "totalCount",
});

@Component({
  name: "PaginatedTable",

  components: {
    ToolSampleAutoRender,
    ToolFormItem,
    ToolForm,
    ToolAutoRender,
    RuleTitleH3,
    RuleTextField,
  },
})
export default class PaginatedTable extends Vue {
  // 默认的当前页、每页数量（只有分页组件能够改变这个值，请不要随意改变钙质，除非你知道不会形成死循环）
  paging = { index: 1, size: 10 };

  // 初始总数
  pagingTotal = 0;

  // 标题
  @Prop({ type: String, default: "" }) title?: string;

  // table > body class
  @Prop({ type: String, default: "" }) bodyClass?: string;

  // data-table`s header
  @Prop({ type: Array, default: () => [], required: true })
  headers!: Array<AutoDataTableHeader>;

  // 表格数据
  @Prop({ type: Array, default: () => [] }) items!: Array<LoopAny>;

  // 请求函数（必须返回标准数据格式）
  @Prop({ type: Function, default: null, required: true }) requestFun!: (
    config: LoopAny
  ) => zRiskerResponseItem<LoopAny>;

  // 改变响应结构（index、size、total），对数据和分页有帮助
  @Prop({ type: Object, default: () => ({ ...ORIGIN_PROPS }) })
  responseStruct!: {
    value: string;
    index: string;
    size: string;
    total: string;
  };

  // ————————————————————————————————————
  //* ——— 表格数据渲染、请求
  // ————————————————————————————————————

  // 提供外部使用来改变index
  setPagingIndex(number = 1): void {
    this.paging.index = number;
  }

  // 设置index到初始页
  resetPagingIndex(): void {
    this.setPagingIndex();
  }

  // 刷新数据
  private async _flash(): Promise<void> {
    await this.flash();
  }

  // 渲染表格数据
  private mountData(_data: zRiskerResponseItem<LoopAny>): void {
    const { value: valueKey } = this.responseStruct;

    // 没有提供value的解析key
    if (!valueKey)
      return console.error(
        new Error("responseProps中没有提供data属性, 无法解析数据")
      );

    // 解析后的数据不是一个数组
    if (!Array.isArray(_data[valueKey as keyof zRiskerResponseItem<LoopAny>]))
      console.error(
        new Error(
          `数据格式不为数组：${typeof _data[
            valueKey as keyof zRiskerResponseItem<LoopAny>
          ]}`
        )
      );

    this._items = _data[
      valueKey as keyof zRiskerResponseItem<LoopAny>
    ] as Array<LoopAny>;
  }

  // 渲染分页数据, 只会挂载pagingTotal
  private mountPage(_data: zRiskerResponseItem<LoopAny>): void {
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
    this.pagingTotal = _data[
      total as keyof zRiskerResponseItem<LoopAny>
    ] as number;
  }

  // 渲染数据
  // mountPaging：重新渲染分页
  // params: 允许为渲染函数添加额外的查询参数，这在查询时非常有用
  @Debounce(300)
  async flash(
    mountPaging = false,
    params?: LoopAny
  ): Promise<zRiskerResponseItem<LoopAny> | void> {
    const { index, size } = this.responseStruct;

    if (!(index && size))
      return console.error(
        new Error(`index: ${index}, size: ${size} 存在为空`)
      );

    const _list = await this.requestFun(
      Object.assign({ pageTotal: this.pagingTotal }, params, this.pageQuery)
    );

    this.mountData(_list);

    mountPaging && this.mountPage(_list);

    return _list;
  }

  // 计算的翻页查询数据，可用于交由外部组件查询使用
  get pageQuery(): LoopAny {
    return {
      [this.responseStruct.index]: this.paging.index,
      [this.responseStruct.size]: this.paging.size,
    };
  }

  // 计算页面分页数量
  get pagingLen(): number {
    return Math.ceil(this.pagingTotal / this.paging.size);
  }

  // 返回数据
  private get _items(): Array<LoopAny> {
    return this.items;
  }

  // 设置数据
  private set _items(items: Array<LoopAny>) {
    this.$emit("update:items", items);
  }

  // 对传入的headers进行默认修改
  private get _headers(): Array<LoopAny> {
    return this.headers.map((header) => {
      if (!Object.prototype.hasOwnProperty.call(header, "sortable")) {
        header["sortable"] = false;
      }

      return header;
    });
  }

  // ————————————————————————————————————
  //* ——— 列内容可编辑部分
  // ————————————————————————————————————

  // 保护部分属性，防止用户肆意篡改导致样式出现问题
  private modes(value: string): AutoRenderSampleForm {
    const header = this.headers.filter((header) => {
      return header.value === value;
    })[0];

    return Object.assign(
      {
        label: header?.text,
        componentName: "RuleTextField",
      },
      omit(header.edit || {}, ["position"]) as AutoRenderSampleForm
    );
  }

  // 所有 name=slot ，用于动态设置命名插槽
  private get headersSlotName(): Array<string> {
    return map(this.headers, (item) => {
      return item.value.toLowerCase().replace(/\(.*\)/, "");
    });
  }

  // 当前列是否可以直接编辑，结合命名插槽使用
  private isEditable(value: string): boolean {
    return (
      this.headers.filter((header) => {
        return header.value === value;
      })[0]?.editable === true
    );
  }

  // 插入数据后执行
  @Emit()
  private editDialogSave(item: LoopAny): LoopAny {
    return item;
  }

  // 关闭插入数据后执行
  @Emit()
  private editDialogClose(item: LoopAny): LoopAny {
    return item;
  }

  // ————————————————————————————————————
  //* ——— 生命周期部分
  // ————————————————————————————————————

  // created
  async created(): Promise<void> {
    const tempStruct = { ...this.responseStruct };

    Object.assign(this.responseStruct, ORIGIN_PROPS, tempStruct);

    await this.flash(true);
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
