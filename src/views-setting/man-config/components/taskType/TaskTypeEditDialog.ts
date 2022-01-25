import Vue from "vue";
import { Component, Mixins } from "vue-property-decorator";
import { toKeyValueMap } from "@uts/tools";
import { taskTypeUpdate } from "@req/apis/zRisker/taskType";
import { taskTypeBodyUpdate } from "@/types/taskType";
import PaginatedEditDialog from "@cps/rule-dailog/PaginatedEditDialog.vue";
import { IEditDialog } from "@/types/IEditDialog";
import { AutoRenderMode } from "@cps/tool-form/autoRender";

@Component
class TaskTypeEditDialog
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
