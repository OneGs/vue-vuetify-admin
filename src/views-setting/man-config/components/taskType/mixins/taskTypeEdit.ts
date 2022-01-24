import { Vue, Component, Prop, Ref, Emit } from "vue-property-decorator";
import { AutoRenderMode } from "@cps/tool-form/autoRender";
import { taskTypeBodyAdd, taskTypeResponse } from "@req/zRisker";
import RuleDialog from "@cps/rule-dailog/index.vue";
import { toKeyValueMap } from "@uts/tools";
import { taskTypeAdd } from "@req/apis/zRisker/taskType";

@Component({
  name: "TaskTypeEditMixin",
})
export default class TaskTypeEditMixin extends Vue {
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

  @Prop({ type: Object, default: () => ({}) }) data!: taskTypeResponse;

  @Ref() editDialog?: RuleDialog;

  @Emit()
  submitSuccess(modes: taskTypeBodyAdd): taskTypeBodyAdd {
    return modes;
  }

  @Emit()
  submitFail(): void {
    //
  }

  async onSubmit(validate: boolean): Promise<void> {
    if (!validate) return this.submitFail();

    const requestInfo = toKeyValueMap(this.renderMode.modes) as taskTypeBodyAdd;

    if (!(await taskTypeAdd(requestInfo))) return;

    this.submitSuccess(requestInfo);

    this.editDialog?.close();
  }

  flash(data: taskTypeResponse): void {
    this.renderMode.modes.forEach((mode) => {
      this.$set(mode, "value", data[mode.key as keyof taskTypeResponse]);
    });
  }
}
