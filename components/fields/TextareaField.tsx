import { TextareaFieldConfig } from "@/types";
import { useField } from "@/hooks";
import FieldWrapper from "@/components/FieldWrapper";

export type TextareaFieldProps = {
  field: TextareaFieldConfig;
};

export default function TextareaField({ field }: TextareaFieldProps) {
  const { value, setValue } = useField(field.name, "");

  return (
    <FieldWrapper label={field.label} name={field.name}>
      <textarea
        value={value as string}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </FieldWrapper>
  );
}
