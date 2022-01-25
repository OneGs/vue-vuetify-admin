import { Vue, Component, Emit } from "vue-property-decorator";
import { LoopAny } from "@/types/common";

@Component({
  name: "EditEmit",
})
export default class EditEmit extends Vue {
  @Emit()
  submitSuccess(modes: LoopAny): LoopAny {
    return modes;
  }

  // 点击save保存失败后
  @Emit()
  public submitFail(): void {
    //
  }
}
