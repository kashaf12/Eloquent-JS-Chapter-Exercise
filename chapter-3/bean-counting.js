function countBs(string) {
  return countChar(string, "B");
}

function countChar(string, char = "B") {
  let count = 0;
  for (let c of string) {
    if (c == char) count++;
  }

  return count;
}
