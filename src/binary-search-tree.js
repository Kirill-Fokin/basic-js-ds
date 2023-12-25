const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  // class Node {
  //   constructor(data) {
  //     this.data = data;
  //     this.left = null;
  //     this.right = null;
  //   }
  // }

  constructor () {
    this.Root = null; 
  }

  root() {
    return this.Root;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.Root) {
      this.Root = newNode;
      this.minimal = newNode.data;
      this.maximal = newNode.data;
    } else { 

     this.addNode(this.Root, newNode);

    }
  }

  addNode(node, newNode) { 
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
    } else {
      this.addNode(node.left, newNode)
    }

  } else {
    if (node.right === null) {
      node.right = newNode;
  } else {
    this.addNode(node.right, newNode)
  }
  }
}


  has(data) {
    return Boolean(this.find(data));
  }

  find(data) {
    let res = null;
    findNode(this.Root);
    function findNode(node) {
      if (!node) return 
       else {
        if (node.data === data) res = node;
        else { 
          return data < node.data ?
          findNode(node.left) :
          findNode(node.right);
        };
      }
    }
    return res;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if(!this.Root) {
      return;
    }

    let minNode = this.Root
    while (minNode.left) {
      minNode = minNode.left;
    }

    return minNode.data;
  }

  max() {
    if(!this.Root) {
      return;
    }

    let maxNode = this.Root;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }

    return maxNode.data;
  }

}

module.exports = {
  BinarySearchTree
};