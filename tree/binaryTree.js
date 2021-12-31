class BinaryTree{
  constructor(root){
    this.root = root;
  }

  addLeft(node){
    this.root.left = node;
  }

  addRight(node){
    this.root.right = node;
  }
}

class Node{
  constructor(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}