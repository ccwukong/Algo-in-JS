const DisjointSet = require('../disjointSet');

describe('Test DisjointSet', () => {
  it('Returns true if 2 nodes are connected', () => {
    const dj = new DisjointSet(6);

    dj.union(1,4);

    expect(dj.isConnected(1, 4)).toBe(true);
    expect(dj.isConnected(0, 4)).toBe(false);
  });

});