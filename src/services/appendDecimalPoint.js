import { TCommand } from "../constants/commands.js";
import { isOperator } from "../utils/isOperator.js";

export function appendDecimalPoint(input, value) {
  const lastChar = input.slice(-1);
  const isLastCharOperator = isOperator(lastChar);

  if (isLastCharOperator) return input;

  const lastNumber = input.split(/[-+x÷]/).pop() || "0";

  return lastNumber.includes(".") ? input : input + value;
}
