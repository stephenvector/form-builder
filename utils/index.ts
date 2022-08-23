import { nanoid } from "nanoid";

export function noop() {}

export function generateUUID() {
  return nanoid();
}
