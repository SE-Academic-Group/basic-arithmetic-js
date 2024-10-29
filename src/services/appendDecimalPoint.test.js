import { appendDecimalPoint } from "./appendDecimalPoint";

describe("appendDecimalPoint Service", () => {
  it("should append to empty input", () => {
    const input = "";
    const value = ".";

    // "" + "." = "." means "0."

    expect(appendDecimalPoint(input, value)).toBe(".");
  });

  it("should append to input with the last number is an integer", () => {
    const input = "1+2";
    const value = ".";

    // "1+2" + "." = "1+2." means "1+2."

    expect(appendDecimalPoint(input, value)).toBe("1+2.");
  });

  it("should not append to input with the last number already has a decimal point", () => {
    const input = "1+2.";
    const value = ".";

    // "1+2." + "." = "1+2." means "1+2."

    expect(appendDecimalPoint(input, value)).toBe("1+2.");
  });

  it("should not append to input with the last token is an operator", () => {
    const input = "1+";
    const value = ".";

    // "1+" + "." = "1+" means "1+"

    expect(appendDecimalPoint(input, value)).toBe("1+");
  });

  it("should append to input with multiple operators", () => {
    const input = "1+2-3";
    const value = ".";

    // "1+2-3" + "." = "1+2-3." means "1+2-3."

    expect(appendDecimalPoint(input, value)).toBe("1+2-3.");
  });

  it("should handle input with no operators", () => {
    const input = "123";
    const value = ".";

    // "123" + "." = "123." means "123."

    expect(appendDecimalPoint(input, value)).toBe("123.");
  });

  it("should handle input with leading zeros", () => {
    const input = "001";
    const value = ".";

    // "001" + "." = "001." means "001."

    expect(appendDecimalPoint(input, value)).toBe("001.");
  });

  it("should handle input with trailing zeros after decimal point", () => {
    const input = "1.00";
    const value = ".";

    // "1.00" + "." = "1.00" means "1.00"

    expect(appendDecimalPoint(input, value)).toBe("1.00");
  });
});
