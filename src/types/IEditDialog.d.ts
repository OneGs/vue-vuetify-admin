import { AutoRenderMode } from "@cps/tool-form/autoRender";

export interface IEditDialog {
  renderMode: AutoRenderMode;

  onSubmit(validate: boolean): Promise<void>;
}
