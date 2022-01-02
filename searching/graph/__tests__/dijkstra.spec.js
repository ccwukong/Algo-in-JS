const dijkstra = require('../dijkstra');

describe('Test dijkstra', () => {
  it('Returns the shortest path from the source vertext to the desitination vertex', () => {
    expect(dijkstra([[0, 2, 1, 0, 0],
    [2, 0, 2, 3, 0],
    [1, 2, 0, 2, 0],
    [0, 3, 2, 0, 2],
    [0, 0, 0, 2, 0]], 0, 4)).toBe(5);

    expect(dijkstra([[0, 6, 0, 1, 0],
    [6, 0, 5, 2, 2],
    [0, 5, 0, 0, 5],
    [1, 2, 0, 0, 1],
    [0, 2, 5, 1, 0]], 0, 2)).toBe(7);
  });
});
