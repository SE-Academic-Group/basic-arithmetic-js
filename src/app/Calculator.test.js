import { fireEvent, render } from "@testing-library/react";
import { Calculator } from "./Calculator";

describe("Calculator", () => {
  it("should append numbers to the input", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const button1 = getByText("1");
    const button2 = getByText("2");

    fireEvent.click(button1);
    fireEvent.click(button2);

    expect(getByTestId("input")).toHaveTextContent("12");
  });

  it("should append operators to the input", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const button1 = getByText("1");
    const plusButton = getByText("+");

    fireEvent.click(button1);
    fireEvent.click(plusButton);

    expect(getByTestId("input")).toHaveTextContent("1+");
  });

  it("should append decimal point to the input", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const button1 = getByText("1");
    const decimalButton = getByText(".");

    fireEvent.click(button1);
    fireEvent.click(decimalButton);

    expect(getByTestId("input")).toHaveTextContent("1.");
  });

  it("should calculate the result when '=' is pressed", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const button1 = getByText("1");
    const plusButton = getByText("+");
    const button2 = getByText("2");
    const equalsButton = getByText("=");

    fireEvent.click(button1);
    fireEvent.click(plusButton);
    fireEvent.click(button2);
    fireEvent.click(equalsButton);

    expect(getByTestId("result")).toHaveTextContent("3");
  });

  it("should clear the input and result when 'AC' is pressed", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const button1 = getByText("1");
    const plusButton = getByText("+");
    const button2 = getByText("2");
    const equalsButton = getByText("=");
    const acButton = getByText("AC");

    fireEvent.click(button1);
    fireEvent.click(plusButton);
    fireEvent.click(button2);
    fireEvent.click(equalsButton);
    fireEvent.click(acButton);

    expect(getByTestId("input")).toHaveTextContent("0");
    expect(getByTestId("result")).toBeEmptyDOMElement();
  });

  it("should delete the last character when 'DEL' is pressed", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const button1 = getByText("1");
    const delButton = getByText("DEL");

    fireEvent.click(button1);
    fireEvent.click(button1);
    fireEvent.click(delButton);

    expect(getByTestId("input")).toHaveTextContent("1");
  });

  it("should delete the last character of input when 'DEL' is pressed and result is present", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const button1 = getByText("1");
    const button2 = getByText("2");
    const plus = getByText("+");
    const equals = getByText("=");
    const delButton = getByText("DEL");

    fireEvent.click(button1);
    fireEvent.click(button1);
    fireEvent.click(plus);
    fireEvent.click(button2);
    fireEvent.click(equals);
    fireEvent.click(delButton);

    expect(getByTestId("input")).toHaveTextContent("11+");
  });

  it("should use the previous answer when 'Ans' is pressed", () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const button1 = getByText("1");
    const plusButton = getByText("+");
    const button2 = getByText("2");
    const equalsButton = getByText("=");
    const ansButton = getByText("Ans");

    fireEvent.click(button1);
    fireEvent.click(plusButton);
    fireEvent.click(button2);
    fireEvent.click(equalsButton);
    fireEvent.click(ansButton);

    expect(getByTestId("input")).toHaveTextContent("3");
  });
});
