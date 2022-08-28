import { useFormValues } from "@/hooks";
import { FieldConfig } from "@/types";
import RenderFormFields from "./RenderFormFields";
import { useState } from "react";
import FormStore from "@/lib/FormStore";
import { FormStoreContext } from "@/contexts";

export default function FormPreview() {
  const value = useFormValues();
  const [previewFormStore] = useState(new FormStore());

  return (
    <div>
      <h2>Preview</h2>
      {"fields" in value ? (
        <FormStoreContext.Provider value={previewFormStore}>
          <RenderFormFields fields={value.fields as FieldConfig[]} />
        </FormStoreContext.Provider>
      ) : null}
      <pre>
        <code>{JSON.stringify(value, null, 2)}</code>
      </pre>
    </div>
  );
}
