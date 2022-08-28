import { PropsWithChildren } from "react";
import Label from "@/components/Label";

export default function FieldWrapper({
  children,
  label,
  name,
}: PropsWithChildren<{ label: string; name: string }>) {
  return (
    <div className="field-wrapper">
      <Label htmlFor={name} label={label} />
      {children}
    </div>
  );
}
