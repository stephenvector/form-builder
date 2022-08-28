import { useState } from "react";
import { FORM_BUILDER_FIELDS } from "@/constants";
import RenderFormFields from "@/components/RenderFormFields";
import FormPreview from "@/components/FormPreview";
import FormStore from "@/lib/FormStore";
import { FormStoreContext } from "@/contexts";

export default function Home() {
  const [formStore] = useState(new FormStore());

  return (
    <div>
      <h1>Form Builder</h1>
      <FormStoreContext.Provider value={formStore}>
        <>
          <RenderFormFields fields={FORM_BUILDER_FIELDS} />
          <FormPreview />
        </>
      </FormStoreContext.Provider>
    </div>
  );
}
