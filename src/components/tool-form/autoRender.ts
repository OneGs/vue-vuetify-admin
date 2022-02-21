import { DataTableHeader } from "vuetify";

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
  | "RuleCardExample"
  | "RuleRadioColorsPicker";

export interface AutoRenderForm extends PureAutoRenderForm {
  key: string;
  label?: string;
  position: string;
  componentName: ComponentNames;

  // ---- 每个元素可能带有的特殊元素

  type?: string;
  inline?: boolean;
}

export interface AutoRenderSampleForm extends PureAutoRenderForm {
  label?: string;
  position?: string;
  componentName: ComponentNames;
}

export interface PureAutoRenderForm {
  key?: string;
  placeholder?: string;
  value?: string | number | boolean | null | Array<string | number | boolean>;
  options?:
    | { label: string; value: string | number }[]
    | { icon: string; color: string; fill?: string }[];
  rules?: string;
}

export interface AutoRenderMode {
  row: number;
  col: number | Array<Array<number>>;
  single?: boolean;
  modes: Array<AutoRenderForm>;
}

export interface AutoDataTableHeader extends DataTableHeader {
  editable?: boolean;
  edit?: AutoRenderSampleForm;
}
