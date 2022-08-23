import { ArrayFieldConfig } from "@/types";

export type ArrayFieldProps = {
  field: ArrayFieldConfig;
};

const ArrayField: React.FC<ArrayFieldProps> = ({ field }: ArrayFieldProps) => {
  return <div>Array</div>;
};
