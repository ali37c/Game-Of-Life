class GameOfLife {
    constructor(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.grid = this.createGrid();
    }
  
    createGrid() {
      const grid = new Array(this.rows);
      for (let i = 0; i < this.rows; i++) {
        grid[i] = new Array(this.cols).fill(0);
      }
      return grid;
    }
  
    setCell(row, col, value) {
      this.grid[row][col] = value;
    }
  
    getCell(row, col) {
      if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
        return 0;
      }
      return this.grid[row][col];
    }
  
    countNeighbours(row, col) {
      let count = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          count += this.getCell(row + i, col + j);
        }
      }
      return count;
    }
  
    nextGeneration() {
      const nextGrid = this.createGrid();
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          const neighbours = this.countNeighbours(i, j);
          if (this.grid[i][j] === 1) {
            if (neighbours < 2 || neighbours > 3) {
              nextGrid[i][j] = 0;
            } else {
              nextGrid[i][j] = 1;
            }
          } else {
            if (neighbours === 3) {
              nextGrid[i][j] = 1;
            }
          }
        }
      }
      this.grid = nextGrid;
    }
  }
  
  module.exports = GameOfLife;
  