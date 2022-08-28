import { ArrayFieldConfig } from "@/types";
import { useField } from "@/hooks";

import RenderFormFields from "@/components/RenderFormFields";
import FieldWrapper from "@/components/FieldWrapper";

export type ArrayFieldProps = {
  field: ArrayFieldConfig;
};

export default function ArrayField({ field }: ArrayFieldProps) {
  const { value, setValue } = useField(field.name, []) as any;

  return (
    <FieldWrapper label={field.label} name={field.name}>
      <div>
        <button
          type="button"
          onClick={() => {
            setValue([...value, {}]);
          }}
        >
          Add Row
        </button>
      </div>
      {(value as any[]).map((_value, index) => (
        <div
          className="array-field-row"
          key={`${field.name}[${index}]-${value.length}`}
        >
          <div>
            <button
              type="button"
              onClick={() => {
                setValue(
                  [...value].reduce((acc, v, currentIndex) => {
                    if (currentIndex !== index) {
                      acc.push(v);
                    }
                    return acc;
                  }, [])
                );
              }}
            >
              {field.deleteItemText}
            </button>
          </div>
          <RenderFormFields
            fields={field.fields}
            prefix={`${field.name}[${index}]`}
          />
        </div>
      ))}
    </FieldWrapper>
  );
}
