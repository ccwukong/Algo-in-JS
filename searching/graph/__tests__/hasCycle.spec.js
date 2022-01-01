const hasCycle = require('../hasCycle');

describe('Test hasCycle in a graph', () => {
  it('Returns true if 2 nodes are unioned.', () => {
    expect(hasCycle([[1], [2], [3], [1]])).toBe(true);
  });
});
