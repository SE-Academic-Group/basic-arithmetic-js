import {
  CALCULATION_FUNCTIONS,
  NUMBERS,
  OPERATORS,
} from "../constants/commands.js";
import { isNumber } from "./isNumber";

describe("isNumber", () => {
  it("should return true if the value is a integer number", () => {
    const numbers = NUMBERS.filter((number) => number !== ".");

    numbers.forEach((number) => {
      expect(isNumber(number.toString())).toBe(true);
    });
  });

  it("should return true if the value is a float number", () => {
    const numbers = NUMBERS.filter((number) => number !== ".").map(
      (number) => number + ".05"
    );

    numbers.forEach((number) => {
      expect(isNumber(number)).toBe(true);
    });
  });

  it("should return false if the value is an operator", () => {
    const operators = OPERATORS;

    operators.forEach((operator) => {
      expect(isNumber(operator)).toBe(false);
    });
  });

  it("should return false if the value is a calculation function", () => {
    const fns = CALCULATION_FUNCTIONS;

    fns.forEach((fn) => {
      expect(isNumber(fn)).toBe(false);
    });
  });
});
