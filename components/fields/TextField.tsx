import { TextFieldConfig } from "@/types";
import { useField } from "@/hooks";
import FieldWrapper from "@/components/FieldWrapper";

export type TextFieldProps = {
  field: TextFieldConfig;
};

export default function TextField({ field }: TextFieldProps) {
  const { value, setValue } = useField(field.name, "");

  return (
    <FieldWrapper label={field.label} name={field.name}>
      <input
        className="input"
        type="text"
        value={value as string}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </FieldWrapper>
  );
}
