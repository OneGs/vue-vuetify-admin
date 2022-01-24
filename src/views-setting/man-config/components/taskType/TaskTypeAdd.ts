import Vue from "vue";
import { Component, Emit, Mixins } from "vue-property-decorator";
import TaskTypeEditMixin from "@/views-setting/man-config/components/taskType/mixins/taskTypeEdit";
import { taskTypeBodyAdd } from "@req/zRisker";
import TaskTypeEdit from "@/views-setting/man-config/components/taskType/TaskTypeEdit.vue";

@Component({
  name: "TaskTypeAdd",
})
class TaskTypeAdd extends Mixins(TaskTypeEditMixin) {
  @Emit()
  submitSuccess(modes: taskTypeBodyAdd): taskTypeBodyAdd {
    console.log("hello");
    return modes;
  }
}

console.log(TaskTypeEdit, "/n", Vue.extend(TaskTypeEdit), "edit");

export default TaskTypeAdd;
