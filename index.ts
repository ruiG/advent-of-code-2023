console.log("lmao");

const data = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

function magicCalculator2000(data: string[]) {
  const totals: number[] = [];

  for (const i in data) {
    const str = data[i];

    let nums: number[] = [];
    str.split("").forEach((char) => {
      if (Number.isInteger(Number(char))) {
        nums.push(Number(char));
      }
    });

    totals.push(Number(nums[0]) * 10 + Number(nums[nums.length - 1]));
  }

  return totals.reduce((prev, cur) => prev + cur, 0);
}

export { magicCalculator2000 };
