import { test, expect } from "bun:test";
import { capitalize } from "./capitalize.js";

test("Capitalize the first letter of a string", () => {
  expect(capitalize("my first test")).toBe("My first test");
});
