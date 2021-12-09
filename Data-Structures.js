const arr = [3, 6, 3, 8, 1, 8, 4, 9, 6];
const sumUnique = (arr) => {
  let uniq = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      continue;
    }
    uniq += arr[i];
  }
  return uniq;
};
console.log(sumUnique(arr));

const ofSum = [1, 2, 3];
const sm = [1, 2, 6];

const sumUnique = (a, b) => {
  let amountUniq = 0;
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      amountUniq += a[i];
    }
    if (!a.includes(b[i])) {
      amountUniq += b[i];
    }
  }
  return amountUniq;
};
console.log(sumUnique(ofSum, sm));
