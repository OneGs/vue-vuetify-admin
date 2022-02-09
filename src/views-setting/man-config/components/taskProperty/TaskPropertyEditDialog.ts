import Vue from "vue";
import { Component, Mixins } from "vue-property-decorator";
import { toKeyValueMap } from "@uts/tools";
import { taskPropertyUpdate } from "@req/apis/zRisker/taskProperty";
import { taskPropertyBodyUpdate } from "@/types/taskProperty";
import PaginatedEditDialog from "@cps/rule-dailog/PaginatedEditDialog.vue";
import { IEditDialog } from "@/types/IEditDialog";
import TaskPropertyAddDialog from "@/views-setting/man-config/components/taskProperty/TaskPropertyAddDialog";

@Component
class TaskPropertyEditDialog
  extends Mixins(PaginatedEditDialog, TaskPropertyAddDialog)
  implements IEditDialog
{
  title = "编辑任务";

  async onSubmit(validate: boolean): Promise<void> {
    if (!validate) return this.submitFail();

    this.loading = true;

    const requestInfo = toKeyValueMap(
      this.renderMode.modes
    ) as taskPropertyBodyUpdate;

    if (!(await taskPropertyUpdate({ ...this.data, ...requestInfo })))
      return void (this.loading = false);

    this.submitSuccess(requestInfo);

    this.editDialog?.close();

    this.loading = false;
  }
}

export default Vue.extend(TaskPropertyEditDialog);
