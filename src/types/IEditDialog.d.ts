export interface IEditDialog {
  onSubmit(validate: boolean): Promise<void>;
}
