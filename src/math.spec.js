import { isEven } from "./math";

describe("isEven", () => {
  it("Should return true if given an even number", () => {
    // Function under test (SUT)

    const result = isEven(2);
    expect(result).toEqual(true);
  });

  it("Should return false if given an odd number", () => {
    // Function under test (SUT)

    const result = isEven(2);
    expect(result).toEqual(true);
  });
});
