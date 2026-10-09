import { test, expect } from "bun:test";
import { reverseString } from "./reverseString.js";

test("reverse an String", () => {
  expect(reverseString("Hello, world!")).toBe("!dlrow ,olleH");
});
