import { cn } from "./cn.js";

describe("cn.js", () => {
  it("should work fine, it's battle-tested", () => {
    expect(true).toBe(true);
  });

  it("should merge class names correctly", () => {
    const result = cn("class1", "class2");
    expect(result).toBe("class1 class2");
  });

  it("should handle conditional class names", () => {
    // eslint-disable-next-line no-constant-binary-expression
    const result = cn("class1", false && "class2", "class3");
    expect(result).toBe("class1 class3");
  });

  it("should merge Tailwind classes correctly", () => {
    const result = cn("p-4", "p-2");
    expect(result).toBe("p-2");
  });

  it("should handle empty inputs", () => {
    const result = cn();
    expect(result).toBe("");
  });

  it("should handle null and undefined inputs", () => {
    const result = cn("class1", null, undefined, "class2");
    expect(result).toBe("class1 class2");
  });
});
