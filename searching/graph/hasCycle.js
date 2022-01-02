/**
 * 30/12/2021 by Cheng(ccwukong)
 * This function simply check if there's any cycles in a graph represented by an adjacency list using
 * DFS.
 *
 * Instead of having a recursion stack, I use a set instead coz the sequence of the stack elements
 * doesn't really matter.
 *
 * Time complexity: O(E+V)
 * Space complexity: O(V)
 */
const hasCycle = g => {
  const isCyclic = (g, visited, seen, curr) => {
    /**
     * if a node is already visited globally and in the current call stack(seen), it means
     * the graph has a cycle
     */
    if (visited.has(curr) && seen.has(curr)) {
      return true;
    }

    /**
     * usually I will add the vertices to the visited set in the for loop below to avoid
     * having the hasCycle function called repeatedly for the same set of vertices.
     * 
     * However, in here, I choose to add the current vertex to the visited and seen set before
     * the for loop for 2 reasons:
     * 1. there's no need to check if a vertex has already been added to the visited set or not
     * 2. it will make the logic much simpler in this case.
     */
    visited.add(curr); // add current node to global visited tracking
    seen.add(curr); // add current node to the current seen call stack;
    for (let v of g[curr]) {
      if (isCyclic(g, visited, seen, v)) return true;
    }

    seen.delete(curr); // if no cycle detected, evict the current node from seen call stack
    return false; // no cycle detected on the current call stack
  };

  return isCyclic(g, new Set(), new Set(), 0);
};

module.exports = hasCycle;
