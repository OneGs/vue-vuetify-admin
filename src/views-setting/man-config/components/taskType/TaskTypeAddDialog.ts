import Vue from "vue";
import { Component, Mixins } from "vue-property-decorator";
import { toKeyValueMap } from "@uts/tools";
import { taskTypeAdd } from "@req/apis/zRisker/taskType";
import { taskTypeBodyAdd } from "@/types/taskType";
import PaginatedEditDialog from "@cps/rule-dailog/PaginatedEditDialog.vue";
import { IEditDialog } from "@/types/IEditDialog";
import { AutoRenderMode } from "@cps/tool-form/autoRender";

@Component
class TaskTypeAddDialog
  extends Mixins(PaginatedEditDialog)
  implements IEditDialog
{
  renderMode: AutoRenderMode = {
    row: 3,
    col: 1,
    modes: [
      {
        key: "name",
        label: "Type name",
        value: "",
        position: "0-0",
        componentName: "RuleTextField",
        rules: "required",
      },
      {
        key: "description",
        label: "note",
        position: "1-0",
        componentName: "RuleTextarea",
      },
    ],
  };

  async onSubmit(validate: boolean): Promise<void> {
    if (!validate) return this.submitFail();

    const requestInfo = toKeyValueMap(this.renderMode.modes) as taskTypeBodyAdd;

    if (!(await taskTypeAdd(requestInfo))) return;

    this.submitSuccess(requestInfo);

    this.editDialog?.close();
  }
}

export default Vue.component(
  "TaskTypeAddDialog",
  Vue.extend(TaskTypeAddDialog)
);
