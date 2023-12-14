import { validateString } from "./validateString.js";

describe("Given validateString function", () => {
  test("when value is undefined then return false", () => {
    const value = undefined;

    const result = validateString(value);

    expect(result).toBe(false);
  });
  test("when value is a number then return false", () => {
    const value = 123;

    const result = validateString(value);

    expect(result).toBe(false);
  });
  test("when value is an array then return false", () => {
    const value = [];

    const result = validateString(value);

    expect(result).toBe(false);
  });
  test("when value is a boolean then return false", () => {
    const value = true;

    const result = validateString(value);

    expect(result).toBe(false);
  });
  test("when value is an object then return false", () => {
    const value = {};

    const result = validateString(value);

    expect(result).toBe(false);
  });
  test("when value is an empty string then return false", () => {
    const value = "";

    const result = validateString(value);

    expect(result).toBe(false);
  });
  test("when value is a fulfilled string then return true", () => {
    const value = "hello Jaume";

    const result = validateString(value);

    expect(result).toBe(true);
  });
});
