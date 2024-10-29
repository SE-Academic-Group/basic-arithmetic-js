import { COMMANDS } from "../constants/commands.js";
import { cn } from "../utils/cn.js";
import { isOperator } from "../utils/isOperator.js";

export function Keyboard({ onButtonClick: handleButtonClick }) {
  return (
    <div className="grid grid-cols-4 gap-0.5">
      {COMMANDS.map((button) => (
        <button
          className={cn(
            "bg-number p-2 text-xl font-medium hover:bg-number/40",
            button === "0" && "col-span-2",
            isOperator(button) && "bg-operator hover:bg-operator/40"
          )}
          key={button}
          onClick={() => handleButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}
