import Vue from "vue";
import { Component, Mixins } from "vue-property-decorator";
import TaskTypeEdit from "@/views-setting/man-config/components/taskType/TaskTypeEdit.vue";
import { toKeyValueMap } from "@uts/tools";
import { taskTypeBodyAdd } from "@req/zRisker";
import { taskTypeAdd } from "@req/apis/zRisker/taskType";

@Component({
  name: "TaskTypeAdd",
})
class TaskTypeAdd extends Mixins(TaskTypeEdit) {
  async onSubmit(validate: boolean): Promise<void> {
    if (!validate) return this.submitFail();

    const requestInfo = toKeyValueMap(this.renderMode.modes) as taskTypeBodyAdd;

    if (!(await taskTypeAdd(requestInfo))) return;

    this.submitSuccess(requestInfo);

    this.editDialog?.close();
  }
}

export default Vue.component("TaskTypeAdd", Vue.extend(TaskTypeAdd));
