import { getLetterMatchCount } from "./";

describe("getLetterMatchCount", () => {
  const secretWord = "party";
  test("returnst correct count when there are no matching letters", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });
  test("returnst correct count when there are 3 matching letters", () => {
    const letterMatchCount = getLetterMatchCount("train", secretWord);
    expect(letterMatchCount).toBe(3);
  });
  test("returnst correct count when there are duplicate letters in guess", () => {
    const letterMatchCount = getLetterMatchCount("parka", secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
