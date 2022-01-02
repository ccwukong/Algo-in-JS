/**
 * 02/02/2022 by Cheng(ccwukong)
 *
 * Trie is a very useful data structure that stores words in tree structure
 * 
 * Each node of the trie maintains a hashtable/array which stores the references of its child nodes
 * 
 * Time complexity: add O(w), find O(w)
 * Space complexity: add O(1), find O(1)
 */
class Node {
  constructor() {
    this.dict = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(w) {
    let root = this.root;
    for (let c of w) {
      if (!(c in root.dict)) {
        root.dict[c] = new Node();
      }
      root = root.dict[c];
    }

    root.isWord = true;
  }

  find(w){
    let root = this.root;
    for (let c of w) {
      if (!(c in root.dict)) {
        return false;
      }
      root = root.dict[c];
    }

    return root.isWord;
  }
}

module.exports = Trie;