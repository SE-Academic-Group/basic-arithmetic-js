import { render, screen } from "@testing-library/react";
import { CalculatorScreen } from "./CalculatorScreen";

describe("CalculatorScreen", () => {
  it("renders input and result correctly", () => {
    render(<CalculatorScreen input="5+3" result="8" />);
    expect(screen.getByText("5+3")).toBeDefined();
    expect(screen.getByText("=8")).toBeDefined();
  });

  it("renders input with no result", () => {
    render(<CalculatorScreen input="5+3" result="" />);
    expect(screen.getByText("5+3")).toBeDefined();
    expect(screen.queryByText("=")).toBeNull();
  });

  it("renders default input when input is empty", () => {
    render(<CalculatorScreen input="" result="" />);
    expect(screen.getByText("0")).toBeDefined();
    expect(screen.queryByText("=")).toBeNull();
  });
});
