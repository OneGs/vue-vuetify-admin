type ComponentNames =
  | "RuleCheckbox"
  | "RuleDatePicker"
  | "RuleFile"
  | "RuleRadio"
  | "RuleSelect"
  | "RuleSwitch"
  | "RuleTextField"
  | "RuleTextarea"
  | "RuleTimePicker"
  | "RuleCardExample";

export interface AutoRenderForm {
  label?: string;
  placeholder?: string;
  value?: string | number | boolean | Array<string | number | boolean>;
  options?: { label: string; value: string | number }[];
  position: string;
  componentName: ComponentNames;
}

export interface AutoRenderMode {
  row: number;
  col: number | Array<Array<number>>;
  single?: boolean;
  modes: Array<AutoRenderForm>;
}
