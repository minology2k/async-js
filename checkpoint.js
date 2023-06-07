const prices = [4, 6, 19, 2, 7, 9, 1, 5, 3, 8];
const prices2 = [43, 76, 12, 85, 52, 29, 68];
const prices3 = [100, 50, 1];

// const N = gets();
// const listNum = gets()
//   .split("")
//   .map((it) => Number.parseInt(it));

const investor = (arr) => {
  let min = arr[0];
  let max = arr[1];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      max = arr[i + 1];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log({ min, max });
  return max ? max - min : 0;
};
print;

console.log(investor(prices));
