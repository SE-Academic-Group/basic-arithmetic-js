import { appendOperator } from "./appendOperator";

describe("appendOperator", () => {
  it('should append operator to an empty input if operator is "-"', () => {
    const input = "";
    const operator = "-";

    expect(appendOperator(input, operator)).toBe("-");
  });

  it('should not append operator to an empty input if operator is not "-"', () => {
    const input = "";
    const notMinusOperators = ["+", "*", "/"];

    notMinusOperators.forEach((operator) => {
      expect(appendOperator(input, operator)).toBe("");
    });
  });

  it("should append operator if the last character is not an operator", () => {
    const input = "123";
    const operator = "+";

    expect(appendOperator(input, operator)).toBe("123+");
  });

  it("should not append operator if the last character is an operator", () => {
    const input = "123+";
    const operator = "+";

    expect(appendOperator(input, operator)).toBe("123+");
  });

  it('should append "-" if the last character is an operator and not "-"', () => {
    const input = "123+";
    const operator = "-";

    expect(appendOperator(input, operator)).toBe("123+-");
  });

  it('should not append "-" if the last character is already "-"', () => {
    const input = "123-";
    const operator = "-";

    expect(appendOperator(input, operator)).toBe("123-");
  });
});
