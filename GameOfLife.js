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
    return new Array(this.height)
      .fill()
      .map(() => new Array(this.width).fill(0));
  }

  cellExists(row, col) {
    return row >= 0 && row < this.height && col >= 0 && col < this.width;
  }

  getCell(row, col) {
    if (this.cellExists(row, col)) {
      return this.board[row][col];
    } else {
      return 0;
    }
  }

  setCell(value, row, col) {
    if (this.cellExists(row, col)) {
      this.board[row][col] = value;
    } else {
      return 0;
    }
  }

  toggleCell(row, col) {
    if (this.cellExists(row, col)) {
      this.setCell(1 - this.getCell(row, col), row, col);
    } else {
      return;
    }
  }

  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
    //given cells position, return number of living neighbors

    // get cell then go to living neighbors

    return (
      //row above
      this.getCell(row - 1, col - 1) +
      this.getCell(row - 1, col) +
      this.getCell(row - 1, col + 1) +
      //left and right
      this.getCell(row, col - 1) +
      this.getCell(row, col + 1) +
      //row below
      this.getCell(row + 1, col - 1) +
      this.getCell(row + 1, col) +
      this.getCell(row + 1, col + 1)
    );
  }

  conwayRule(cell, livingNeighbors) {
    const isAlive = cell === 1;
    if (isAlive) {
      if (livingNeighbors === 2 || livingNeighbors === 3) {
        return 1;
      } else {
        return 0;
      }
    } else if (livingNeighbors === 3) {
      return 1;
    } else {
      return 0;
    }
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */

  forEachCell(iterator) {
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        iterator(row, col);
      }
    }
  }

  tick() {
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    const newBoard = this.makeBoard();
    this.forEachCell((row, col) => {
      const livingNeighbors = this.livingNeighbors(row, col);
      const nextCell = this.conwayRule(this.getCell(row, col), livingNeighbors);
      newBoard[row][col] = nextCell;
    });

    // 2. Set the next state of all cells in newBoard,
    this.board = newBoard;
  }
}
