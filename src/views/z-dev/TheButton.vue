<template>
  <v-card class="pa-0">
    <v-card-title>
      <rule-h1>按钮 & 按钮组</rule-h1>
    </v-card-title>

    <v-divider />

    <v-card-title>
      <rule-h2>标准按钮</rule-h2>
    </v-card-title>

    <div class="text-body-1 pa-4">
      默认采用small样式，同时赋予了简单的动效，让交互更灵动。
    </div>

    <div class="pa-4">
      <rule-btn v-for="btn in preset" :key="btn" :color="btn" class="btn"
        >按钮</rule-btn
      >
    </div>

    <v-divider />

    <v-card-title>
      <rule-h2>纯文本按钮</rule-h2>
    </v-card-title>

    <div class="text-body-1 pa-4">纯文本只保留数字！</div>

    <div class="pa-4">
      <rule-btn v-for="btn in preset" :key="btn" :color="btn" class="btn" plain
        >按钮</rule-btn
      >
    </div>

    <v-divider />

    <v-card-title>
      <rule-h2>图标按钮</rule-h2>
    </v-card-title>

    <div class="text-body-1 pa-4">
      允许通过 slot或 icon=""
      的形式将按钮转化为图标按钮。同时，即使是默认size为small，你仍可以通过large改变大小。
    </div>

    <div class="pa-4">
      <rule-btn
        v-for="btn in preset"
        :key="btn"
        :color="btn"
        class="btn"
        icon="mdi-home"
        large
      />
    </div>

    <v-divider />

    <v-card-title>
      <rule-h2>组合按钮</rule-h2>
    </v-card-title>

    <div class="pa-4 text-body-1">
      允许通过 slot 同时存在icon和text，这样可以起到更好的美观和提示效果。
    </div>

    <div class="pa-4">
      <rule-btn v-for="btn in preset" :key="btn" :color="btn" class="btn">
        <v-icon v-text="'mdi-home'" small left />
        按钮
      </rule-btn>
    </div>

    <v-divider />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/src/decorators/Meta";

@Meta({
  title: "按钮 & 按钮组",
  order: 4,
  icon: "mdi-card-outline",
  color: "orange",
})
@Component({
  name: "TheButton",
})
export default class TheButton extends Vue {
  preset = [
    "primary",
    "secondary",
    "accent",
    "error",
    "info",
    "success",
    "warning",
    "default",
  ];
}
</script>

<style scoped lang="scss">
.btn {
  &:not(:first-child) {
    margin-left: 12px;
  }
}
</style>
