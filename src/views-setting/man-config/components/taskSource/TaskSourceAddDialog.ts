import Vue from "vue";
import { Component, Mixins } from "vue-property-decorator";
import { toKeyValueMap } from "@uts/tools";
import { taskSourceAdd } from "@req/apis/zRisker/taskSource";
import { taskSourceBodyAdd } from "@/types/taskSource";
import PaginatedEditDialog from "@cps/rule-dailog/PaginatedEditDialog.vue";
import { IEditDialog } from "@/types/IEditDialog";
import { AutoRenderMode } from "@cps/tool-form/autoRender";

@Component
class TaskSourceAddDialog
  extends Mixins(PaginatedEditDialog)
  implements IEditDialog
{
  title = "新增属性";

  renderMode: AutoRenderMode = {
    row: 2,
    col: 1,
    modes: [
      {
        key: "name",
        label: "数据源名称",
        placeholder: "输入数据源名称",
        position: "0-0",
        componentName: "RuleTextField",
        rules: "required",
      },
      {
        key: "description",
        label: "备注",
        placeholder: "输入数据源备注",
        position: "1-0",
        componentName: "RuleTextarea",
      },
    ],
  };

  async onSubmit(validate: boolean): Promise<void> {
    if (!validate) return this.submitFail();

    this.loading = true;

    const requestInfo = toKeyValueMap(
      this.renderMode.modes
    ) as taskSourceBodyAdd;

    if (!(await taskSourceAdd(requestInfo))) return void (this.loading = false);

    this.submitSuccess(requestInfo);

    this.editDialog?.close();

    this.loading = false;
  }
}

export default Vue.extend(TaskSourceAddDialog);
