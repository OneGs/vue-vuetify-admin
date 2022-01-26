import Vue from "vue";
import { Component, Mixins } from "vue-property-decorator";
import { toKeyValueMap } from "@uts/tools";
import { taskTypeUpdate } from "@req/apis/zRisker/taskType";
import { taskTypeBodyUpdate } from "@/types/taskType";
import PaginatedEditDialog from "@cps/rule-dailog/PaginatedEditDialog.vue";
import { IEditDialog } from "@/types/IEditDialog";
import { AutoRenderMode } from "@cps/tool-form/autoRender";
import config from "@/config";

@Component
class TaskTypeEditDialog
  extends Mixins(PaginatedEditDialog)
  implements IEditDialog
{
  title = "编辑任务";

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
        position: "2-0",
        componentName: "RuleRadioColorsPicker",
        options: [...config.taskIcons],
      },
    ],
  };

  async onSubmit(validate: boolean): Promise<void> {
    if (!validate) return this.submitFail();

    const requestInfo = toKeyValueMap(
      this.renderMode.modes
    ) as taskTypeBodyUpdate;

    if (!(await taskTypeUpdate({ ...this.data, ...requestInfo }))) return;

    this.submitSuccess(requestInfo);

    this.editDialog?.close();
  }
}

export default Vue.component(
  "TaskTypeEditDialog",
  Vue.extend(TaskTypeEditDialog)
);
