import { fireEvent, render, screen } from "@testing-library/react";
import { COMMANDS } from "../constants/commands.js";
import { Keyboard } from "./Keyboard";

describe("Keyboard", () => {
  it("renders all buttons", () => {
    render(<Keyboard onButtonClick={jest.fn()} />);
    COMMANDS.forEach((command) => {
      expect(screen.getByText(command)).toBeDefined();
    });
  });

  it("calls onButtonClick with the correct value when a button is clicked", () => {
    const handleButtonClick = jest.fn();
    render(<Keyboard onButtonClick={handleButtonClick} />);

    COMMANDS.forEach((command) => {
      const button = screen.getByText(command);
      fireEvent.click(button);
      expect(handleButtonClick).toHaveBeenCalledWith(command);
    });
  });
});
