import { test, expect, describe } from "bun:test";
import { analyzeArray } from "./analyzeArray.js";

describe("analyzeArray", () => {
  test("analyzeArray", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
  });
  test("handles multi-digit numbers", () => {
  expect(analyzeArray([10, 25, 100, 5])).toEqual({ average: 35, min: 5, max: 100, length: 4 });
  });
});
