import Vue from "vue";
import { Component, Mixins } from "vue-property-decorator";
import { toKeyValueMap } from "@uts/tools";
import { taskSourceUpdate } from "@req/apis/zRisker/taskSource";
import { taskSourceBodyUpdate } from "@/types/taskSource";
import PaginatedEditDialog from "@cps/rule-dailog/PaginatedEditDialog.vue";
import { IEditDialog } from "@/types/IEditDialog";
import TaskSourceAddDialog from "@/views-setting/man-config/components/taskSource/TaskSourceAddDialog";

@Component
class TaskSourceEditDialog
  extends Mixins(PaginatedEditDialog, TaskSourceAddDialog)
  implements IEditDialog
{
  title = "编辑任务";

  async onSubmit(validate: boolean): Promise<void> {
    if (!validate) return this.submitFail();

    this.loading = true;

    const requestInfo = toKeyValueMap(
      this.renderMode.modes
    ) as taskSourceBodyUpdate;

    if (!(await taskSourceUpdate({ ...this.data, ...requestInfo })))
      return void (this.loading = false);

    this.submitSuccess(requestInfo);

    this.editDialog?.close();

    this.loading = false;
  }
}

export default Vue.extend(TaskSourceEditDialog);
