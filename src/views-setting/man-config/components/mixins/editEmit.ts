import { Vue, Component, Emit } from "vue-property-decorator";
import { taskTypeBodyAdd, taskTypeBodyUpdate } from "@/types/taskType";

@Component({
  name: "EditEmit",
})
export default class EditEmit extends Vue {
  @Emit()
  submitSuccess(
    modes: taskTypeBodyAdd | taskTypeBodyUpdate
  ): taskTypeBodyAdd | taskTypeBodyUpdate {
    return modes;
  }

  // 点击save保存失败后
  @Emit()
  public submitFail(): void {
    //
  }
}
