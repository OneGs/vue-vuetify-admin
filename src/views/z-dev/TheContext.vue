<template>
  <div class="white box-shadow">
    <rule-h1>标题</rule-h1>

    <v-divider />

    <rule-h1 class="mt-6">主标题 heading 1</rule-h1>

    <rule-h2 class="mt-6">主标题 heading 2</rule-h2>

    <rule-h3 class="mt-6">主标题 heading 3</rule-h3>

    <rule-h1 class="mt-10">文本</rule-h1>

    <v-divider />

    <div class="mt-8">
      <div class="text-body-1">这是一段正常的文本。</div>
      <div class="text-body-1 mt-6">this is a normal text.</div>
    </div>

    <rule-h1 class="mt-10">说明</rule-h1>

    <v-divider />

    <div class="mt-6 text-body-1">
      <ul>
        <li>
          使用标题只能使用给定个常用的标题，不能使用额外的内容。三个标题为：
          rule-h1、rule-h2、rule-h3。
        </li>
        <li class="mt-4">
          使用文本时，应尽可能的为每一个文本设置样式，保证文本的独特性。
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Meta } from "@/libs/auto-router/index";

@Meta({
  title: "标题 & 文本",
  order: 10,
  icon: "mdi-format-text",
  color: "indigo",
})
@Component({
  name: "TheTitle",
})
export default class TheTitle extends Vue {}
</script>

<style scoped></style>
