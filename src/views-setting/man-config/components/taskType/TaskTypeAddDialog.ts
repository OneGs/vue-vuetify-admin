import Vue from "vue";
import { Component, Mixins } from "vue-property-decorator";
import { toKeyValueMap } from "@uts/tools";
import { taskTypeAdd } from "@req/apis/zRisker/taskType";
import { taskTypeBodyAdd } from "@/types/taskType";
import PaginatedEditDialog from "@cps/rule-dailog/PaginatedEditDialog.vue";
import { IEditDialog } from "@/types/IEditDialog";
import { AutoRenderMode } from "@cps/tool-form/autoRender";
import config from "@/config";

@Component
class TaskTypeAddDialog
  extends Mixins(PaginatedEditDialog)
  implements IEditDialog
{
  title = "新增任务";

  renderMode: AutoRenderMode = {
    row: 3,
    col: 1,
    modes: [
      {
        key: "name",
        label: "名称",
        value: "",
        position: "0-0",
        componentName: "RuleTextField",
        rules: "required",
      },
      {
        key: "description",
        label: "备注",
        position: "1-0",
        componentName: "RuleTextarea",
      },
      {
        key: "icon",
        label: "图标",
        position: "2-0",
        componentName: "RuleRadioColorsPicker",
        options: [...config.taskIcons],
      },
    ],
  };

  async onSubmit(validate: boolean): Promise<void> {
    if (!validate) return this.submitFail();

    this.loading = true;

    const requestInfo = toKeyValueMap(this.renderMode.modes) as taskTypeBodyAdd;

    if (!(await taskTypeAdd(requestInfo))) return void (this.loading = false);

    this.submitSuccess(requestInfo);

    this.editDialog?.close();

    this.loading = false;
  }
}

export default Vue.extend(TaskTypeAddDialog);
