import {
  CALCULATION_FUNCTIONS,
  NUMBERS,
  OPERATORS,
} from "../constants/commands.js";
import { isDecimalPoint } from "./isDecimalPoint";

describe("isDecimalPoint", () => {
  it("should return true for '.'", () => {
    expect(isDecimalPoint(".")).toBe(true);
  });

  it("should return false for number inputs", () => {
    const numbers = NUMBERS.filter((number) => number !== ".");

    numbers.forEach((number) => {
      expect(isDecimalPoint(number)).toBe(false);
    });
  });

  it("should return false for operators", () => {
    const operators = OPERATORS;

    operators.forEach((operator) => {
      expect(isDecimalPoint(operator)).toBe(false);
    });
  });

  it("should return false for calculation functions", () => {
    const fns = CALCULATION_FUNCTIONS;

    fns.forEach((calculationFunction) => {
      expect(isDecimalPoint(calculationFunction)).toBe(false);
    });
  });
});
