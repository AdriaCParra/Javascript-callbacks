import transformStringToArray from "./transformStringToCollection.js";

describe("transformStringToArray", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call onError callback if value is not a string", () => {
    const onError = jest.fn();
    const onSuccess = jest.fn();

    transformStringToArray(123, onError, onSuccess);

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onSuccess).not.toHaveBeenCalled();
  });

  it("should call onError callback if value is an empty string", () => {
    const onError = jest.fn();
    const onSuccess = jest.fn();

    transformStringToArray("", onError, onSuccess);

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onSuccess).not.toHaveBeenCalled();
  });

  it("should call onSuccess callback if value is a non-empty string", () => {
    const onError = jest.fn();
    const onSuccess = jest.fn();

    transformStringToArray("Hello", onError, onSuccess);

    expect(onError).not.toHaveBeenCalled();
    expect(onSuccess).toHaveBeenCalledTimes(1);
  });
});
