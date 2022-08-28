import { UUIDFieldConfig } from "@/types";
import { useField } from "@/hooks";
import { generateUUID } from "@/utils";
import FieldWrapper from "@/components/FieldWrapper";

export type UUIDFieldProps = {
  field: UUIDFieldConfig;
};

export default function TextField({ field }: UUIDFieldProps) {
  const { value, setValue } = useField(field.name, generateUUID());

  return null;
  return (
    <FieldWrapper label={field.label} name={field.name}>
      <pre>
        <code>{value as string}</code>
      </pre>
    </FieldWrapper>
  );
}
