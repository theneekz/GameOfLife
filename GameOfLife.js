class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard() {
    let board = [];
    for (let i = 0; i < this.height; i++) {
      let row = [];
      for (let j = 0; j < this.width; j++) {
        row.push(0);
      }
      board.push(row);
    }
    return board;
  }

  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
    //given cells position, return number of living neighbors
    //use utility methods to get neighbors
    // get cell then go to living neighbors
    let count = 0;
    if (this.getCell(row - 1, col) === 'alive') count++;
    if (this.getCell(row - 1, col + 1) === 'alive') count++;
    if (this.getCell(row - 1, col - 1) === 'alive') count++;
    if (this.getCell(row, col - 1) === 'alive') count++;
    if (this.getCell(row, col + 1) === 'alive') count++;
    if (this.getCell(row + 1, col) === 'alive') count++;
    if (this.getCell(row + 1, col - 1) === 'alive') count++;
    if (this.getCell(row + 1, col + 1) === 'alive') count++;
    return count;
  }
  getCell(row, col) {
    if (row < 0 || row >= this.height || col < 0 || col >= this.width) {
      return 'dead';
    }
    let check = this.board[row][col];
    if (check === 1) {
      return 'alive';
    } else {
      return 'dead';
    }
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */

  tick() {
    const newBoard = this.makeBoard();
    const oldBoard = this.board;
    function toggleCell(row, col) {
      if (oldBoard[row][col] === 1) {
        newBoard[row][col] = 0;
      } else {
        newBoard[row][col] = 1;
      }
    }
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        let check = this.livingNeighbors(i, j);

        // this is where we put the "rules" of the game:
        // for currently alive cells:
        if (this.getCell(i, j) === 'alive') {
          //underpopulation: dies given fewer than 2 live neighbors
          //overcrowding: dies given greater than 3 live neighbors
          if (check < 2 || check > 3) {
            toggleCell(i, j);
          } else {
            //otherwise, it continues to live on
            newBoard[i][j] = 1;
          }
        } else {
          // for currently dead cells:
          if (check === 3) {
            // birth: comes to life given exactly 3 live neighbors
            toggleCell(i, j);
          } else {
            //otherwise, it continues to be dead
            newBoard[i][j] = 0;
          }
        }
      }
    }
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }
}
