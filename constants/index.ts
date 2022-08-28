import { FieldConfig, FieldType, FieldOption } from "@/types";

export const FIELD_TYPE_LABELS: Record<FieldType, string> = {
  [FieldType.Code]: "Code",
  [FieldType.Color]: "Color",
  [FieldType.Select]: "Select",
  [FieldType.Text]: "Text",
  [FieldType.Textarea]: "Textarea",
  [FieldType.Array]: "Array",
  [FieldType.UUID]: "Universally Unique ID (UUID)",
};

export const FIELD_TYPE_OPTIONS: FieldOption[] = Object.values(FieldType).map(
  (fieldType) => ({
    uuid: fieldType,
    label: fieldType,
    value: fieldType,
  })
);

export const FORM_BUILDER_FIELDS: FieldConfig[] = [
  {
    uuid: "fields",
    type: FieldType.Array,
    label: "Fields",
    name: "fields",
    addItemText: "Add New Field",
    deleteItemText: "Delete Field",
    fields: [
      {
        uuid: "label",
        type: FieldType.Text,
        name: "label",
        label: "Label",
      },
      {
        uuid: "uuid",
        type: FieldType.UUID,
        name: "uuid",
        label: "UUID",
      },
      {
        uuid: "fieldname",
        type: FieldType.Text,
        name: "name",
        label: "Name",
      },
      {
        uuid: "fieldtype",
        type: FieldType.Select,
        name: "type",
        label: "Type",
        options: FIELD_TYPE_OPTIONS,
      },
    ],
  },
];

export const FORM_BUILDER_INITIAL_VALUES = {
  fields: [],
};
