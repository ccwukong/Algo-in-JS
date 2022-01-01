const topologicalSort = require('../topologicalSort');

describe('Test topologicalSort', () => {
  it('Returns sorted arr.', () => {
    expect(topologicalSort([[1], [2, 3], [3], [4], []])).toEqual([
      0, 1, 2, 3, 4,
    ]);
    expect(topologicalSort([[1, 3], [2], [5], [2, 4], [5], []])).toEqual([
      0, 1, 3, 2, 4, 5,
    ]);
  });
});
