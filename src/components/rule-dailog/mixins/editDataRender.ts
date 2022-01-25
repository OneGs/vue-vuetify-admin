import { Vue, Component, Prop, Ref } from "vue-property-decorator";
import { AutoRenderMode } from "@cps/tool-form/autoRender";
import { taskTypeResponse } from "@/types/taskType";
import RuleDialog from "@cps/rule-dailog/index.vue";

@Component({
  name: "EditDataRender",
})
export default class EditDataRender extends Vue {
  // 渲染结构
  renderMode: AutoRenderMode = {
    row: 3,
    col: 1,
    modes: [],
  };

  // 接受数据，用于渲染
  @Prop({ type: Object, default: () => ({}) }) data!: taskTypeResponse;

  // ref rule-dialog 用于执行rule-dialog的函数
  @Ref() editDialog?: RuleDialog;

  // 刷新data数据，保证每次数据都是最新的（不能放在created内）
  flash(data: taskTypeResponse): void {
    this.renderMode.modes.forEach((mode) => {
      this.$set(mode, "value", data[mode.key as keyof taskTypeResponse]);
    });
  }
}
