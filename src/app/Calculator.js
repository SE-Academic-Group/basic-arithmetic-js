import { useRef, useState } from "react";

import { CalculatorScreen } from "./CalculatorScreen.js";
import { Keyboard } from "./Keyboard.js";

import { appendDecimalPoint } from "../services/appendDecimalPoint.js";
import { appendNumber } from "../services/appendNumber.js";
import { appendOperator } from "../services/appendOperator.js";
import { del } from "../services/del.js";

import { ac } from "../services/ac.js";
import { equals } from "../services/equals.js";
import { isDecimalPoint } from "../utils/isDecimalPoint.js";
import { isNumber } from "../utils/isNumber.js";
import { isOperator } from "../utils/isOperator.js";

export function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const ansRef = useRef("");

  function handleButtonClick(value) {
    let bufferInput = input;
    let bufferResult = result;

    if (isNumber(value)) {
      bufferInput = appendNumber(bufferInput, value);
    } else if (isOperator(value)) {
      bufferInput = appendOperator(bufferInput, value);
    } else if (isDecimalPoint(value)) {
      bufferInput = appendDecimalPoint(bufferInput, value);
    } else if (value == "DEL") {
      if (bufferResult) bufferResult = "";
      bufferInput = del(bufferInput);
    } else if (value == "AC") {
      const [acInput, acResult] = ac();
      bufferInput = acInput;
      bufferResult = acResult;
    } else if (value == "=") {
      bufferResult = equals(bufferInput);
      ansRef.current = bufferResult;
    } else if (value == "Ans") {
      bufferInput = ansRef.current;
      bufferResult = "";
    }

    setInput(bufferInput);
    setResult(bufferResult);
  }

  return (
    <div className="mx-auto max-w-md overflow-clip rounded-xl border-2 bg-gray-300 font-mono shadow-lg">
      <CalculatorScreen input={input} result={result} />
      <Keyboard onButtonClick={handleButtonClick} />
    </div>
  );
}
