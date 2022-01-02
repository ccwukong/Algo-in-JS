/**
 * 02/01/2022 by Cheng(ccwukong)
 *
 * Dijkstra is an implementation of greedy algorithms used to find the shortest path 
 * in a single-sourced graph that has all its paths with positive weights.
 *
 * In this implementation, An adjacency matrix will be used to represent the weighted graph by defining each cell's value
 * as the weight of the edge between 2 vertices. And BFS will be used as the searching algorithm. 
 * 
 * The key factor of implementing Dijkstra algorithm is building the distance table along traversing the
 * adjacency matrix
 * 
 * Let's say we have a graph G:
 *   A B C D E
 * A 0 2 1 0 0
 * B 2 0 2 3 0
 * C 1 2 0 2 0
 * D 0 3 2 0 2
 * E 0 0 0 2 0
 * 
 * And we want to find the shortest path from vertex A to vertex E:
 * 
 *  | vertex | distance | parents |
 *  -------------------------------
 *  | A      | 0        | A       |
 *  | B      | 2        | A       |
 *  | C      | 1        | A       | 
 *  | D      | 3        | C       | 
 *  | E      | 5        | D       | 
 * 
 * So the shortest path from A to E is A -> C -> D -> E, and the total distance is 5.
 * 
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 */
const dijkstra = (g, start, end) => {
  const n = g.length;
  // Set all distance to Infinity except the source vertex
  const dist = new Array(g.length).fill(Infinity);
  // The starting vertex has 0 weighted edge
  dist[start] = 0;
  const parent = new Array(g.length);
  parent[start] = start;

  const visited = new Set();
  // A normal array is used to simulate deque data structure.
  let queue = [start];

  while (queue.length) {
    // Assume this is a dequeue operation has O(1) time complexity
    let v = queue.shift();
    visited.add(v);
    let min = Infinity;
    let minVertex = -1;

    let j = 0;
 
    // Find the connected vertices of vertex v from adjacency matrix
    const next = g[v].map((e, i) => e > 0 ? i : undefined).filter(x => x);

    for (let j of next) {
      if (!visited.has(j)) {
        if (dist[v] + g[v][j] < dist[j]) {
          dist[j] = dist[v] + g[v][j];
          parent[j] = v;

          if (dist[j] < min) {
            min = dist[j];
            minVertex = j;
          }
        }
      }
    }

    if(minVertex > 0)
      queue.push(minVertex);
  }

  return dist[end];
};

module.exports = dijkstra;
