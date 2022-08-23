import { FieldConfig, FieldType, FieldOption } from "@/types";

export const FIELD_TYPE_LABELS: Record<FieldType, string> = {
  [FieldType.Code]: "Code",
  [FieldType.Color]: "Color",
  [FieldType.Select]: "Select",
  [FieldType.Text]: "Text",
  [FieldType.Textarea]: "Textarea",
  [FieldType.Array]: "Array",
};

export const FIELD_TYPE_OPTIONS: FieldOption[] = Object.values(FieldType).map(
  (fieldType) => ({
    uuid: fieldType,
    label: fieldType,
    value: fieldType,
  })
);

export const FORM_BUILDER_FIELDS: FieldConfig[] = [];
