/**
 * 31/12/2021 by Cheng(ccwukong)
 *
 * Topological sort only works for Directed Asyclic Graph.
 *
 * In this implementation, I will use adjacency list to represent the input DAG
 * I will use regular array to represent Queue data structure for the sake of convienience
 *
 * Time complexity: O(V+E)
 * Space complexity: O(V) we just need 2 additional arraies to store the indegree counts and sorted result
 * for each vertex
 */

const topologicalSort = g => {
  // the indegree array is used to track
  const indegree = new Array(g.length).fill(0);
  const queue = [];

  for (let list of g) {
    for (let v of list) {
      indegree[v]++;
    }
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  const res = [];
  while (queue.length) {
    const n = queue.shift(); // assume this is a normal queue and dequeue operation takes O(1) time
    res.push(n);
    for (let v of g[n]) {
      indegree[v]--;
      if (indegree[v] === 0) queue.push(v);
    }
  }

  return res;
};

module.exports = topologicalSort;
