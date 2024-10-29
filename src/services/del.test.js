import { del } from "./del";

describe("del", () => {
  it("should remove the last character from a string", () => {
    const input = "hello";
    expect(del(input)).toBe("hell");
  });

  it("should return an empty string when input is a single character", () => {
    const input = "a";
    expect(del(input)).toBe("");
  });

  it("should return an empty string when input is empty", () => {
    const input = "";
    expect(del(input)).toBe("");
  });

  it("should handle strings with spaces correctly", () => {
    const input = "hello world";
    expect(del(input)).toBe("hello worl");
  });

  it("should handle strings with special characters correctly", () => {
    const input = "hello!";
    expect(del(input)).toBe("hello");
  });
});
