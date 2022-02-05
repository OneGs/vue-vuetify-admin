<!--
  简化form-item上属性的重复书写
-->

<template>
  <v-form @submit.prevent>
    <slot />
  </v-form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "ToolForm",

  provide() {
    return {
      rootForm: this,
    };
  },
})
export default class ToolForm extends Vue {
  // 统一修改label的位置
  @Prop({ type: Boolean, default: false }) inline!: boolean;

  // 统一隐藏详细信息
  @Prop({ type: Boolean, default: false }) hideDetails!: boolean;

  // 统一隐藏label信息
  @Prop({ type: Boolean, default: false }) single!: boolean;

  // 统一修改表单label的宽度
  @Prop({ type: Number, default: 2 }) positionWidth!: number;
}
</script>

<style scoped></style>
