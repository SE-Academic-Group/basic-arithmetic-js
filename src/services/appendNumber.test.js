import { appendNumber } from "./appendNumber";

describe("appendNumber", () => {
  it("should append value to an empty input", () => {
    expect(appendNumber("", "5")).toBe("5");
  });

  it("should append value to a non-empty input", () => {
    expect(appendNumber("123", "4")).toBe("1234");
  });

  it("should replace the last zero if the last number starts with zero and does not contain a decimal point", () => {
    expect(appendNumber("10+0", "5")).toBe("10+5");
  });

  it("should not replace the last zero if the last number contains a decimal point", () => {
    expect(appendNumber("10+0.", "5")).toBe("10+0.5");
  });

  it("should handle multiple operators correctly", () => {
    expect(appendNumber("10+20-30x40÷50", "6")).toBe("10+20-30x40÷506");
  });

  it("should append value to a number after an operator", () => {
    expect(appendNumber("10+", "5")).toBe("10+5");
  });
});
