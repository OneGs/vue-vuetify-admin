export interface IDeleteDialog {
  title: string;

  onSubmit(): Promise<void>;
}
