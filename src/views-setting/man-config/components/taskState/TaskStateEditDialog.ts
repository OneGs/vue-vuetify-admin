import Vue from "vue";
import { Component, Mixins } from "vue-property-decorator";
import PaginatedEditDialog from "@cps/rule-dailog/PaginatedEditDialog.vue";
import { IEditDialog } from "@/types/IEditDialog";
import { taskStateBodyUpdate } from "@/types/taskState";
import { taskStateUpdate } from "@req/apis/zRisker/taskState";
import { AutoRenderMode } from "@cps/tool-form/autoRender";

@Component({
  name: "TaskStatusEditDialog",
})
class TaskStateEditDialog
  extends Mixins(PaginatedEditDialog)
  implements IEditDialog
{
  renderMode: AutoRenderMode = {
    row: 3,
    col: 1,
    modes: [
      {
        key: "name",
        label: "状态名称",
        position: "0-0",
        componentName: "RuleTextField",
        rules: "required",
      },
      {
        key: "type",
        label: "状态类型",
        position: "1-0",
        componentName: "RuleSelect",
        options: [
          { label: "未开始", value: 0 },
          { label: "进行中", value: 1 },
          { label: "已完成", value: 2 },
        ],
        rules: "required",
      },
      {
        key: "description",
        label: "备注",
        position: "2-0",
        componentName: "RuleTextarea",
      },
    ],
  };

  async onSubmit(validate: boolean): Promise<void> {
    if (!validate) return this.submitFail();

    const requestInfo = this.toKeyValueMap(
      this.renderMode.modes
    ) as taskStateBodyUpdate;

    if (!(await taskStateUpdate({ ...this.data, ...requestInfo }))) return;

    this.submitSuccess(requestInfo);

    this.editDialog?.close();
  }
}

export default Vue.component(
  "TaskStatusEditDialog",
  Vue.extend(TaskStateEditDialog)
);
