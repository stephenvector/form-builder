import { useContext } from "react";
import { SelectFieldConfig } from "@/types";
import { useFormValue } from "@/hooks";
import { FormStoreContext } from "@/contexts";
import FieldWrapper from "@/components/FieldWrapper";

export type SelectFieldProps = {
  field: SelectFieldConfig;
};

export default function SelectField({ field }: SelectFieldProps) {
  const value = useFormValue(field.name, "");
  const formStore = useContext(FormStoreContext);

  return (
    <FieldWrapper label={field.label} name={field.name}>
      <select
        id={field.name}
        name={field.name}
        value={value as string}
        onChange={(e) => {
          formStore.set(field.name, e.target.value);
        }}
      >
        <option />
        {field.options.map((option) => (
          <option key={option.uuid} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}
