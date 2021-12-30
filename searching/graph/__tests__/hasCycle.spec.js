const hasCycle = require('../hasCycle');

describe('Test graph cycle detection', () => {
  it('Returns true if there is a cycle in the graph', () => {
    expect(hasCycle([[1],[2],[3],[1]])).toBe(true);
  });

  it('Returns false if there is no cycles in the graph', () => {
    expect(hasCycle([[1],[2,3],[3],[]])).toBe(false);
  });
});