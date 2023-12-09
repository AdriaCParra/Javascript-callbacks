import createUser from "./createUser.js";

describe("createUser", () => {
  it("should call onError callback if email is empty", () => {
    const email = "";
    const onError = jest.fn();
    const onSuccess = jest.fn();

    createUser(email, onError, onSuccess);

    expect(onError).toHaveBeenCalled();
    expect(onSuccess).not.toHaveBeenCalled();
  });

  it("should call onError callback if random number is less than 0.5", () => {
    const email = "test@example.com";
    const onError = jest.fn();
    const onSuccess = jest.fn();

    jest.spyOn(Math, "random").mockReturnValue(0.4);

    createUser(email, onError, onSuccess);

    expect(onError).toHaveBeenCalled();
    expect(onSuccess).not.toHaveBeenCalled();

    jest.spyOn(Math, "random").mockRestore();
  });

  it("should call onSuccess function if email is not empty and random number is greater than or equal to 0.5", () => {
    const email = "test@example.com";
    const onError = jest.fn();
    const onSuccess = jest.fn();

    jest.spyOn(Math, "random").mockReturnValue(0.6);

    createUser(email, onError, onSuccess);

    expect(onError).not.toHaveBeenCalled();
    expect(onSuccess).toHaveBeenCalled();

    jest.spyOn(Math, "random").mockRestore();
  });
});
