import type { User } from "firebase/auth";
import type { ArrayFieldProps } from "@/components/fields/ArrayField";
import type { CodeFieldProps } from "@/components/fields/CodeField";
import type { ColorFieldProps } from "@/components/fields/ColorField";
import type { SelectFieldProps } from "@/components/fields/SelectField";
import type { TextareaFieldProps } from "@/components/fields/TextareaField";
import type { TextFieldProps } from "@/components/fields/TextField";

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
}

export type FieldConfigBase = {
  uuid: string;
  label: string;
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

export type ArrayFieldConfig = FieldConfigBase & {
  type: FieldType.Array;
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
  | ArrayFieldConfig;

export type FieldComponentConfig = Record<
  FieldType,
  React.FC<{ field: FieldConfig }>
>;
