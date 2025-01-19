function every(array, predicate) {
  for (let item of array) {
    if (!predicate(item)) return false;
  }

  return true;
}

function every(array, predicate) {
  return !array.some((arr) => !predicate(arr));
}
console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
