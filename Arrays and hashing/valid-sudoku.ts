// https://leetcode.com/problems/valid-sudoku/description/
// 36. Valid Sudoku
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// 1. Each row must contain the digits 1-9 without repetition.
// 2. Each column must contain the digits 1-9 without repetition.
// 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Passed, 61ms, 52.83mb
function isValidSudoku(board: string[][]): boolean {

  const rowMap = new Map<string, number>();
  const colMap = new Map<string, number>();
  const boxMap = new Map<string, number>();

  for (let col = 0; col < board.length; col++) {
    for (let row = 0; row < board[col].length; row++) {
      const currNumString = board[col][row];
      if (currNumString == '.') continue;

      const currNum: number = parseInt(currNumString);

      // Update rowMap
      const rowString: string = row.toString() + ", " + currNum.toString();
      if (rowMap.get(rowString) !== undefined) return false;
      rowMap.set(rowString, 1);

      // Update colMap
      const colString: string = col.toString() + ", " + currNum.toString();
      if (colMap.get(colString) !== undefined) return false;
      colMap.set(colString, 1);

      let box: string = "";
      if (row == 0 || row == 1 || row == 2) {
        if (col == 0 || col == 1 || col == 2) box = "1";
        else if (col == 3 || col == 4 || col == 5) box = "2";
        else if (col == 6 || col == 7 || col == 8) box = "3";
      } else if (row == 3 || row == 4 || row == 5) {
        if (col == 0 || col == 1 || col == 2) box = "4";
        else if (col == 3 || col == 4 || col == 5) box = "5";
        else if (col == 6 || col == 7 || col == 8) box = "6";
      } else if (row == 6 || row == 7 || row == 8) {
        if (col == 0 || col == 1 || col == 2) box = "7";
        else if (col == 3 || col == 4 || col == 5) box = "8";
        else if (col == 6 || col == 7 || col == 8) box = "9";
      }

      // Update boxMap
      const boxString: string = box + ", " + currNum.toString();
      if (boxMap.get(boxString) !== undefined) return false;
      boxMap.set(boxString, 1);
    }
  }

  return true;
}

console.log(isValidSudoku(
  [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
));

console.log(isValidSudoku(
  [["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
));