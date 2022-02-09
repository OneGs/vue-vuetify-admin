import Vue from "vue";
import { Component, Mixins } from "vue-property-decorator";
import { toKeyValueMap } from "@uts/tools";
import { taskPropertyAdd } from "@req/apis/zRisker/taskProperty";
import { taskPropertyBodyAdd } from "@/types/taskProperty";
import PaginatedEditDialog from "@cps/rule-dailog/PaginatedEditDialog.vue";
import { IEditDialog } from "@/types/IEditDialog";
import { AutoRenderMode } from "@cps/tool-form/autoRender";
import config from "@/config";

@Component
class TaskPropertyAddDialog
  extends Mixins(PaginatedEditDialog)
  implements IEditDialog
{
  title = "新增属性";

  renderMode: AutoRenderMode = {
    row: 4,
    col: 1,
    modes: [
      {
        key: "name",
        label: "名称",
        position: "0-0",
        componentName: "RuleTextField",
        rules: "required",
      },
      {
        key: "identifier",
        label: "唯一标识",
        position: "1-0",
        placeholder: "输入任务属性唯一标识，由小写英文、下划线和数字组成",
        componentName: "RuleTextField",
        rules: "required",
      },
      {
        key: "type",
        label: "属性类型",
        position: "2-0",
        placeholder: "输入任务属性唯一标识，由小写英文、下划线和数字组成",
        componentName: "RuleSelect",
        rules: "required",
        options: (() => {
          const result: Array<{ label: string; value: string | number }> = [];

          config.propertyEnum.forEach((val, index) => {
            result.push({ label: val, value: index });
          });

          return result;
        })(),
      },
      {
        key: "description",
        label: "备注",
        position: "3-0",
        componentName: "RuleTextarea",
      },
    ],
  };

  async onSubmit(validate: boolean): Promise<void> {
    if (!validate) return this.submitFail();

    this.loading = true;

    const requestInfo = toKeyValueMap(
      this.renderMode.modes
    ) as taskPropertyBodyAdd;

    if (!(await taskPropertyAdd(requestInfo)))
      return void (this.loading = false);

    this.submitSuccess(requestInfo);

    this.editDialog?.close();

    this.loading = false;
  }
}

export default Vue.extend(TaskPropertyAddDialog);
