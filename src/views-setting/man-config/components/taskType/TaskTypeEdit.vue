// ———————————————————————————————————— //* ——— 提供数据的操作，入口和出口！ //*
入口：通过data引入数据（非响应式，避免同步修改table中的数据）——
如果想要修改数据，通过flashData。 //* 出口： 操作成功后通过事件抛出 //
————————————————————————————————————

<template>
  <rule-dialog
    title="Creating a Task Type"
    @save="onSubmit"
    @open-before="flash(data)"
    ref="editDialog"
  >
    <slot>
      <rule-btn small>add</rule-btn>
    </slot>

    <template #text>
      <tool-auto-render v-model="renderMode" />
    </template>
  </rule-dialog>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { RegisterBtn, RegisterDialog, RegisterForm } from "@cps/the-mixins";
import TaskTypeEditMixin from "./mixins/taskTypeEdit";

@Component({
  name: "TaskTypeEdit",
})
export default class TaskTypeEdit extends Mixins(
  RegisterDialog,
  RegisterBtn,
  RegisterForm,
  TaskTypeEditMixin
) {}
</script>

<style scoped></style>
