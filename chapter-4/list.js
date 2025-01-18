function arrayToList(array) {
  if (array.length == 0) return null;
  let list = {};
  list.value = array[0];
  list.rest = arrayToList(array.slice(1));

  return list;
}

function listToArray(list) {
  if (!list) return [];
  return [list.value, ...listToArray(list.rest)];
}

function prepend(element, list) {
  const newList = {
    value: element,
    rest: list,
  };

  return newList;
}

function nth(list, n) {
  if (n == 0) {
    return list.value;
  }

  return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(arrayToList([10, 20, 30]));
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
