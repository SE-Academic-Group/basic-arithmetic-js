import { equals } from "./equals";

describe("equals", () => {
  it("should return the integer as a string when the result is an integer", () => {
    expect(equals("2 + 2")).toBe("4");
  });

  it("should return the float rounded to two decimal places as a string when the result is a float", () => {
    expect(equals("5 / 2")).toBe("2.50");
  });

  it('should return "Error" when the result is not a number', () => {
    expect(equals("'hello'")).toBe("Error");
  });

  it('should return "Error" for invalid input', () => {
    expect(equals("invalid input")).toBe("Error");
  });
});
