import { AutoRenderMode } from "@cps/tool-form/autoRender";

export interface IEditDialog {
  title: string;

  renderMode: AutoRenderMode;

  onSubmit(validate: boolean): Promise<void>;
}
