function reverseArray(array) {
  let reversedArr = [];
  const size = array.length - 1;
  for (let i = size; i >= 0; i--) {
    reversedArr.push(array[i]);
  }

  return reversedArr;
}

function reverseArrayInPlace(array) {
  let i = 0,
    j = array.length - 1;
  while (i < j) {
    array[i] = array[j] ^ array[i];
    array[j] = array[i] ^ array[j];
    array[i] = array[i] ^ array[j];
    i++;
    j--;
  }
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
