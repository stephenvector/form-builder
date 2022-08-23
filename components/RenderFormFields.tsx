import { FieldType, FieldConfig } from "../types";
import ArrayField from "@/components/fields/ArrayField";
import CodeField from "@/components/fields/CodeField";
import ColorField from "@/components/fields/ColorField";
import SelectField from "@/components/fields/SelectField";
import TextareaField from "@/components/fields/TextareaField";
import TextField from "@/components/fields/TextField";

export type RenderFormFieldsProps = {
  fields: FieldConfig[];
};

export default function RenderFormFields({ fields }: RenderFormFieldsProps) {
  return (
    <>
      {fields.map((field) => {
        switch (field.type) {
          case FieldType.Array:
            return <ArrayField key={field.uuid} field={field} />;
          case FieldType.Code:
            return <CodeField key={field.uuid} field={field} />;
          case FieldType.Color:
            return <ColorField key={field.uuid} field={field} />;
          case FieldType.Select:
            return <SelectField key={field.uuid} field={field} />;
          case FieldType.Textarea:
            return <TextareaField key={field.uuid} field={field} />;
          case FieldType.Text:
            return <TextField key={field.uuid} field={field} />;
          default:
            return null;
        }
      })}
    </>
  );
}
