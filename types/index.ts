import type { User } from "firebase/auth";

export type AuthContextValue = {
  user: User | null;
  checkedAuth: boolean;
};

export enum FieldType {
  Array = "array",
  Text = "text",
  Textarea = "textarea",
  Code = "code",
  Color = "color",
  Select = "select",
  UUID = "uuid",
}

export type FieldConfigBase = {
  uuid: string;
  label: string;
  name: string;
};

export type TextFieldConfig = FieldConfigBase & {
  type: FieldType.Text;
};

export type TextareaFieldConfig = FieldConfigBase & {
  type: FieldType.Textarea;
};

export type ColorFieldConfig = FieldConfigBase & {
  type: FieldType.Color;
};

export type CodeFieldConfig = FieldConfigBase & {
  type: FieldType.Code;
};

export type UUIDFieldConfig = FieldConfigBase & {
  type: FieldType.UUID;
};

export type ArrayFieldConfig = FieldConfigBase & {
  type: FieldType.Array;
  fields: FieldConfig[];
  addItemText: string;
  deleteItemText: string;
};

export type FieldOption = {
  uuid: string;
  label: string;
  value: string;
};

export type SelectFieldConfig = FieldConfigBase & {
  type: FieldType.Select;
  options: FieldOption[];
};

export type FieldConfig =
  | TextFieldConfig
  | TextareaFieldConfig
  | ColorFieldConfig
  | CodeFieldConfig
  | SelectFieldConfig
  | UUIDFieldConfig
  | ArrayFieldConfig;

export type FieldComponentConfig = Record<
  FieldType,
  React.FC<{ field: FieldConfig }>
>;
