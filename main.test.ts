import { expect, test } from "bun:test";
import { magicCalculator2000 } from ".";

test("day 1 - example", () => {
  const data = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

  const result = magicCalculator2000(data);
  expect(result).toBe(142);
});
