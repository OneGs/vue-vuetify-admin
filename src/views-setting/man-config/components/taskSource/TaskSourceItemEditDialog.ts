import Vue from "vue";
import { Component, Mixins, Prop } from "vue-property-decorator";
import { toKeyValueMap } from "@uts/tools";
import { taskSourceItemUpdate } from "@req/apis/zRisker/taskSource";
import { taskSourceItemBodyUpdate } from "@/types/taskSource";
import PaginatedEditDialog from "@cps/rule-dailog/PaginatedEditDialog.vue";
import { IEditDialog } from "@/types/IEditDialog";
import TaskSourceItemAddDialog from "@/views-setting/man-config/components/taskSource/TaskSourceItemAddDialog";

@Component
class TaskSourceItemEditDialog
  extends Mixins(PaginatedEditDialog, TaskSourceItemAddDialog)
  implements IEditDialog
{
  title = "修改数据项";

  @Prop({ type: Number, required: true }) id!: number;

  async onSubmit(validate: boolean): Promise<void> {
    if (!validate) return this.submitFail();

    this.loading = true;

    const requestInfo = toKeyValueMap(
      this.renderMode.modes
    ) as taskSourceItemBodyUpdate;

    if (
      !(await taskSourceItemUpdate({
        ...this.data,
        ...requestInfo,
        propertyId: this.id,
      }))
    )
      return void (this.loading = false);

    this.submitSuccess(requestInfo);

    this.editDialog?.close();

    this.loading = false;
  }
}

export default Vue.extend(TaskSourceItemEditDialog);
