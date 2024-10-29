import {
  CALCULATION_FUNCTIONS,
  NUMBERS,
  OPERATORS,
} from "../constants/commands.js";
import { isOperator } from "./isOperator.js";

describe("isOperator.js", () => {
  test("should return true if the value is an operator", () => {
    const operators = OPERATORS;

    operators.forEach((operator) => {
      expect(isOperator(operator)).toBe(true);
    });
  });

  test("should return false if the value is a number", () => {
    const numbers = NUMBERS.filter((num) => num !== ".");

    numbers.forEach((number) => {
      expect(isOperator(number.toString())).toBe(false);
    });
  });

  test("should return false if the value is a calculation function", () => {
    const fns = CALCULATION_FUNCTIONS;

    fns.forEach((fn) => {
      expect(isOperator(fn)).toBe(false);
    });
  });
});
