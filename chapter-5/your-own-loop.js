function loop(start, testFn, updFn, bodyFn) {
  while (testFn(start)) {
    bodyFn(start);
    start = updFn(start);
  }
}

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1
