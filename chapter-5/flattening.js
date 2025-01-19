let arrays = [[1, 2, 3], [4, 5], [6]];

let reducedArrays = arrays.reduce((acc, cur) => {
  return acc.concat(cur);
}, []);

console.log(reducedArrays);

// → [1, 2, 3, 4, 5, 6]
