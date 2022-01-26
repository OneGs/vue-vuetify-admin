<template>
  <rule-dialog
    :title="title"
    @save="onSubmit"
    @open-before="flash(data)"
    persistent
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
import { IEditDialog } from "@/types/IEditDialog";
import EditEmit from "./mixins/editEmit";
import EditDataRender from "./mixins/editDataRender";
import { toKeyValueMap } from "@/utils/tools";

@Component({
  name: "PaginatedEditDialog",
})
export default class PaginatedEditDialog
  extends Mixins(
    RegisterDialog,
    RegisterBtn,
    RegisterForm,
    EditEmit,
    EditDataRender
  )
  implements IEditDialog
{
  // 点击save执行
  async onSubmit(validate: boolean): Promise<void> {
    console.log("submit", validate);
  }

  toKeyValueMap = toKeyValueMap;
}
</script>
