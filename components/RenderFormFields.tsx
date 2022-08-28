import { useMemo } from "react";
import { FieldType, FieldConfig } from "@/types";
import ArrayField from "@/components/fields/ArrayField";
import CodeField from "@/components/fields/CodeField";
import ColorField from "@/components/fields/ColorField";
import SelectField from "@/components/fields/SelectField";
import TextareaField from "@/components/fields/TextareaField";
import TextField from "@/components/fields/TextField";
import UUIDField from "@/components/fields/UUIDField";
import styles from "./RenderFormFields.module.css";

export type RenderFormFieldsProps = {
  fields: FieldConfig[];
  prefix?: string;
};

export default function RenderFormFields({
  fields,
  prefix,
}: RenderFormFieldsProps) {
  const prefixedFields = useMemo(() => {
    return fields.map((field) => {
      return {
        ...field,
        name: prefix ? `${prefix}.${field.name}` : field.name,
      };
    });
  }, [prefix, fields]);

  console.log(prefixedFields);

  return (
    <div className="render-form-fields">
      {prefixedFields.map((field) => {
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
          case FieldType.UUID:
            return <UUIDField key={field.uuid} field={field} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
