import { describe, expect, it } from "vitest";

describe("Template Smoke Test", () => {
  it("should verify Next.js is available", async () => {
    await expect(import("next")).resolves.toBeDefined();
  });

  it("should verify React is available", async () => {
    await expect(import("react")).resolves.toBeDefined();
  });

  it("should verify build tooling can be imported", async () => {
    await expect(import("tailwind-merge")).resolves.toBeDefined();
    await expect(import("clsx")).resolves.toBeDefined();
  });
});
