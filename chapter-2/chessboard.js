(function chessboard(n = 8) {
  for (let row = 1; row <= n; row++) {
    let row_checks = "";
    for (let col = 1; col <= n; col++) {
      row_checks += (row + col) % 2 == 0 ? " " : "#";
    }
    console.log(row_checks);
  }
})(10);
