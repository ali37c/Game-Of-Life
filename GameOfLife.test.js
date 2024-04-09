const GameOfLife = require('./gameOfLife');

test('Game of Life - Blinker Test', () => {
    const game = new GameOfLife(5, 5);
  
    // Set up Blinker pattern
    game.setCell(1, 2, 1);
    game.setCell(2, 2, 1);
    game.setCell(3, 2, 1);
  
    // Verify initial state
    expect(game.grid).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ]);
  
    // Perform one iteration
    game.nextGeneration();
  
    // Verify state after one iteration
    expect(game.grid).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]);
  
    // Perform another iteration
    game.nextGeneration();
  
    // Verify state after two iterations (back to initial state)
    expect(game.grid).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ]);
  });


  test('Game of Life - Glider Test', () => {
    const game = new GameOfLife(5, 5);
  
    // Set up Glider pattern
    game.setCell(0, 1, 1);
    game.setCell(1, 2, 1);
    game.setCell(2, 0, 1);
    game.setCell(2, 1, 1);
    game.setCell(2, 2, 1);
  
    // Verify initial state
    expect(game.grid).toEqual([
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]);
  
    // Perform one iteration
    game.nextGeneration();
  
    // Verify state after one iteration
    expect(game.grid).toEqual([
      [0, 0, 0, 0, 0],
      [1, 0, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]);
  });
  
  test('Game of Life - Still Life Test', () => {
    const game = new GameOfLife(5, 5);
  
    // Set up Block pattern (a still life)
    game.setCell(1, 1, 1);
    game.setCell(1, 2, 1);
    game.setCell(2, 1, 1);
    game.setCell(2, 2, 1);
  
    // Verify initial state
    expect(game.grid).toEqual([
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]);
  
    // Perform one iteration
    game.nextGeneration();
  
    // Verify state after one iteration (should remain the same)
    expect(game.grid).toEqual([
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]);
  });
  
  test('Game of Life - Oscillator Test', () => {
    const game = new GameOfLife(5, 5);
  
    // Set up Toad pattern (an oscillator)
    game.setCell(1, 1, 1);
    game.setCell(1, 2, 1);
    game.setCell(1, 3, 1);
    game.setCell(2, 0, 1);
    game.setCell(2, 1, 1);
    game.setCell(2, 2, 1);
  
    // Verify initial state
    expect(game.grid).toEqual([
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]);
  
    // Perform one iteration
    game.nextGeneration();
  
    // Verify state after one iteration
    expect(game.grid).toEqual([
      [0, 0, 1, 0, 0],
      [1, 0, 0, 1, 0],
      [1, 0, 0, 1, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]);
  });

  /*test('Game of Life - Glider Gun Test', () => {
    const game = new GameOfLife(10, 40);
  
    // Set up Glider Gun pattern
    game.setCell(1, 25, 1);
    game.setCell(2, 23, 1);
    game.setCell(2, 25, 1);
    game.setCell(3, 13, 1);
    game.setCell(3, 14, 1);
    game.setCell(3, 21, 1);
    game.setCell(3, 22, 1);
    game.setCell(3, 35, 1);
    game.setCell(3, 36, 1);
    game.setCell(4, 12, 1);
    game.setCell(4, 16, 1);
    game.setCell(4, 21, 1);
    game.setCell(4, 22, 1);
    game.setCell(4, 35, 1);
    game.setCell(4, 36, 1);
    game.setCell(5, 1, 1);
    game.setCell(5, 2, 1);
    game.setCell(5, 11, 1);
    game.setCell(5, 17, 1);
    game.setCell(5, 21, 1);
    game.setCell(5, 22, 1);
    game.setCell(6, 1, 1);
    game.setCell(6, 2, 1);
    game.setCell(6, 11, 1);
    game.setCell(6, 15, 1);
    game.setCell(6, 17, 1);
    game.setCell(6, 18, 1);
    game.setCell(6, 23, 1);
    game.setCell(6, 25, 1);
    game.setCell(7, 11, 1);
    game.setCell(7, 17, 1);
    game.setCell(7, 25, 1);
    game.setCell(8, 12, 1);
    game.setCell(8, 16, 1);
    game.setCell(9, 13, 1);
    game.setCell(9, 14, 1);
  
    // Perform one iteration
    game.nextGeneration();
  
    // Verify state after one iteration
    expect(game.grid[5][1]).toBe(1);
    expect(game.grid[5][2]).toBe(1);
    expect(game.grid[6][1]).toBe(0);
    expect(game.grid[6][2]).toBe(1);
    expect(game.grid[4][24]).toBe(1);
    expect(game.grid[5][24]).toBe(1);
    expect(game.grid[6][24]).toBe(0);
    expect(game.grid[7][24]).toBe(0);
  });*/
  
  test('Game of Life - Empty Grid Test', () => {
    const game = new GameOfLife(3, 3);
  
    // Perform one iteration
    game.nextGeneration();
  
    // Verify state after one iteration (should remain empty)
    expect(game.grid).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]);
  });
  
  test('Game of Life - Custom Pattern Test', () => {
    const game = new GameOfLife(5, 5);
  
    // Set up custom pattern
    game.setCell(0, 0, 1);
    game.setCell(1, 1, 1);
    game.setCell(2, 2, 1);
  
    // Copy the initial grid for comparison
    const initialGrid = JSON.parse(JSON.stringify(game.grid));
  
    // Perform one iteration
    game.nextGeneration();
    let result = [
      [ 0, 0, 0, 0, 0 ],
      [ 0, 1, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0 ]
    ]
  
    // Verify state after one iteration
    expect(game.grid).toEqual(result);
  });
  
  
  
  