/**
 * 30/12/2021 by Cheng(ccwukong)
 *
 * Disjoint set is a data structure used to check the connectivity of different nodes.
 * There are 2 implementations: quick union and quick find. In this implementation,
 * I choose quick union + ranking + path compression
 *
 * Time complexity:
 * Space complexity:
 */
class DisjointSet {
  constructor(n) {
    this.root = []; // this is used to store the parent node of each node from 0 ~ n-1.
    let c = 0;
    while (c < n) {
      this.root.push(c);
      c++;
    }
    this.rank = new Array(n).fill(0);
  }

  find(node) {
    // find parent node recursively until the value of a node equals to its own index
    if (this.root[node] == node) return node;

    // path compression, making sure all elements in the root array point to their root element
    this.root[node] = this.find(this.root[node]);
    return this.root[node];
  }

  union(n1, n2) {
    // find the parent of n1 and n2
    let p1 = this.find(n1);
    let p2 = this.find(n2);

    // only updating the ranking during union.
    if (p1 !== p2) {
      if (this.rank[p1] >= this.rank[p2]) {
        this.rank[p1]++;
        this.root[p2] = p1;
      } else {
        this.rank[p2]++;
        this.root[p1] = p2;
      }
    }
  }

  isConnected(n1, n2) {
    let p1 = this.find(n1);
    let p2 = this.find(n2);

    return p1 === p2;
  }
}

module.exports = DisjointSet;
