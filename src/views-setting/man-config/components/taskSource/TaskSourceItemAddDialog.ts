import Vue from "vue";
import { Component, Mixins, Prop } from "vue-property-decorator";
import { toKeyValueMap } from "@uts/tools";
import { taskSourceItemAdd } from "@req/apis/zRisker/taskSource";
import { taskSourceItemBodyAdd } from "@/types/taskSource";
import PaginatedEditDialog from "@cps/rule-dailog/PaginatedEditDialog.vue";
import { IEditDialog } from "@/types/IEditDialog";
import { AutoRenderMode } from "@cps/tool-form/autoRender";

@Component
class TaskSourceItemAddDialog
  extends Mixins(PaginatedEditDialog)
  implements IEditDialog
{
  title = "新建数据项";

  renderMode: AutoRenderMode = {
    row: 2,
    col: 1,
    modes: [
      {
        key: "text",
        label: "文本",
        placeholder: "输入数据项文本",
        position: "0-0",
        componentName: "RuleTextField",
        rules: "required",
      },
      {
        key: "value",
        label: "值",
        placeholder: "文字对应的值（可选）",
        position: "1-0",
        componentName: "RuleTextField",
        type: "number",
      },
    ],
  };

  @Prop({ type: Number, required: true }) id!: number;

  async onSubmit(validate: boolean): Promise<void> {
    if (!validate) return this.submitFail();

    this.loading = true;

    const requestInfo = toKeyValueMap(
      this.renderMode.modes
    ) as taskSourceItemBodyAdd;

    if (
      !(await taskSourceItemAdd(
        Object.assign(
          {
            propertyId: this.id,
          },
          requestInfo
        )
      ))
    )
      return void (this.loading = false);

    this.submitSuccess(requestInfo);

    this.editDialog?.close();

    this.loading = false;
  }
}

export default Vue.extend(TaskSourceItemAddDialog);
