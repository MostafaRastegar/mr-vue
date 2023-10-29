import actionTemplate from "../actionTemplate";

describe("actionTemplate", () => {
  it("should execute the service function and resolve the promise when status is between 200 and 399", async () => {
    // Arrange
    const commit = jest.fn();
    const type = "ACTION_TYPE";
    const service = jest
      .fn()
      .mockResolvedValue({ data: "test data", status: 200 });
    const resolve = jest.fn();
    const reject = jest.fn();

    // Act
    const result = await actionTemplate({
      commit,
      type,
      service,
      resolve,
      reject,
    });

    // Assert
    expect(commit).toHaveBeenCalledWith(`${type}_REQUEST`);
    expect(service).toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith(`${type}_SUCCESS`, "test data");
    expect(resolve).toHaveBeenCalledWith("test data");
    expect(result).toEqual("test data");
    expect(reject).not.toHaveBeenCalled();
    expect(commit).not.toHaveBeenCalledWith(`${type}_FAILURE`);
  });

  it("should execute the service function and reject the promise when status is not between 200 and 399", async () => {
    // Arrange
    const commit = jest.fn();
    const type = "ACTION_TYPE";
    const service = jest
      .fn()
      .mockResolvedValue({ data: "error data", status: 400 });
    const resolve = jest.fn();
    const reject = jest.fn();

    // Act
    try {
      await actionTemplate({ commit, type, service, resolve, reject });
    } catch (error) {
      // Assert
      expect(commit).toHaveBeenCalledWith(`${type}_REQUEST`);
      expect(service).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith(
        `${type}_FAILURE`,
        new Error("Request failed with status code 400")
      );
      expect(reject).toHaveBeenCalledWith(
        new Error("Request failed with status code 400")
      );
      expect(error).toEqual(new Error("Request failed with status code 400"));
      expect(commit).not.toHaveBeenCalledWith(`${type}_SUCCESS`);
      expect(resolve).not.toHaveBeenCalled();
    }
  });

  it("should execute the service function and reject the promise when an error occurs", async () => {
    // Arrange
    const commit = jest.fn();
    const type = "ACTION_TYPE";
    const service = jest.fn().mockRejectedValue(new Error("Service error"));
    const resolve = jest.fn();
    const reject = jest.fn();

    // Act
    try {
      await actionTemplate({ commit, type, service, resolve, reject });
    } catch (error) {
      // Assert
      expect(commit).toHaveBeenCalledWith(`${type}_REQUEST`);
      expect(service).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith(
        `${type}_FAILURE`,
        new Error("Service error")
      );
      expect(reject).toHaveBeenCalledWith(new Error("Service error"));
      expect(error).toEqual(new Error("Service error"));
      expect(commit).not.toHaveBeenCalledWith(`${type}_SUCCESS`);
      expect(resolve).not.toHaveBeenCalled();
    }
  });
});
