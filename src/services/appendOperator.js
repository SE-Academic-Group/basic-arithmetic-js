import { TCommand } from "../constants/commands.js";
import { isOperator } from "../utils/isOperator.js";

export function appendOperator(input, operator) {
  if (!input && operator !== "-") return input;

  const lastChar = input.slice(-1);
  const isLastCharOperator = isOperator(lastChar);

  if (operator == "-" && isLastCharOperator && lastChar != "-") {
    return input + operator;
  }

  return isLastCharOperator ? input : input + operator;
}
