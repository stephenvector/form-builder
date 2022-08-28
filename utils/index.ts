import { nanoid } from "nanoid";
import { FieldType, ArrayFieldConfig, SelectFieldConfig } from "@/types";

export function noop() {}

export function generateUUID() {
  return nanoid();
}

export function getNewSelectField(): SelectFieldConfig {
  const randomId = generateUUID();

  return {
    uuid: randomId,
    name: randomId,
    label: "",
    type: FieldType.Select,
    options: [],
  };
}
