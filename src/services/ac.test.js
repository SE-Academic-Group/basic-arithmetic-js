import { ac } from "./ac";

describe("AC Service", () => {
  it("should clear input", () => {
    const [input] = ac();
    expect(input).toBe("");
  });

  it("should clear result", () => {
    const [, result] = ac();
    expect(result).toBe("");
  });

  it("should return an array with two elements", () => {
    const result = ac();
    expect(result).toHaveLength(2);
  });

  it("should return an array with both elements as empty strings", () => {
    const result = ac();
    expect(result).toEqual(["", ""]);
  });
});
