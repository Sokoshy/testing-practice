import { test, expect } from "bun:test";
import { calculator } from "./calculator.js";

test("calculator", () => {
  expect(calculator.add( 5, 7)).toBe(12),
  expect(calculator.subtract(80, 7)).toBe(73),
  expect(calculator.divide(51, 2)).toBe(25.5),
  expect(calculator.divide(51, 0)).toBe("Erreur"),
  expect(calculator.multiply(6, -5.5)).toBe(-33)
});
