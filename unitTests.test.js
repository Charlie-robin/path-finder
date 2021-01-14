const { data } = require("./data.js");
const { findPath } = require("./main.js");

const wrongData = { 1: "one" };

describe("Testing to find shortest path", () => {
  it("Should take the shortest path", () => {
    expect(findPath("b", "h", data)).toBe(10);
    expect(findPath("a", "h", data)).toBe(9);
    expect(findPath("e", "g", data)).toBe(13);
    expect(findPath("b", "b", data)).toBe(0);
  });

  it("Handle wrong params", () => {
    expect(() => findPath()).toThrow();
    expect(() => findPath("a")).toThrow();
    expect(() => findPath("a", "b")).toThrow();
  });

  it("Handle type errors", () => {
    expect(() => findPath(1, 2, data)).toThrow();
    expect(() => findPath("a", 2, data)).toThrow();
    expect(() => findPath(6, "b", data)).toThrow();
    expect(() => findPath("a", "b", wrongData)).toThrow();
  });
});
