import { describe, expect, it } from "vitest";
import { generateUUID, noop } from ".";

describe("noop()", () => {
  it("should return undefined", () => {
    expect(noop()).toBe(undefined);
  });
});

describe("generateUUID()", () => {
  it("should return a string", () => {
    expect(typeof generateUUID()).toBe("string");
  });
});
