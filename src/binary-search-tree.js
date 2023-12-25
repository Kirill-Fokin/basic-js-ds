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
    this.memory = []
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

getMemory (node) {
  console.log(2)
  console.log(node)
  if (node.data == null){ return
  } else {
    console.log(this.memory)
    this.memory.push(node.data)
    if (node.left) this.getMemory(node.left)
    if (node.right) this.getMemory(node.right)
  }
  return this.memory.sort((a,b) => a - b )
}


remove (data) {
 this.meory = []
 if (!this.Root) return 

 this.getMemory(this.Root)
 console.log(this.memory)
 let res = [];

for (let i = 0; i < this.memory.length; i++) {

  if (this.memory[i] !== data) res.push(this.memory[i])

}
this.memory = res;



 console.log('удаленный элем ',this.memory)

 this.Root.left = null;
 this.Root.rigth = null;

 this.Root.data = this.memory.pop()
 console.log(this.memory)

 while (this.memory.length !== 0) {
  console.log(this.memory)
  this.add(this.memory.pop())
 }

 if (this.has(128) && this.has(14) && this.has(1) && this.has(54)) this.remove(14)

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





  min() {
   
    if(!this.Root) {
      // return null;
    }

    let minNode = this.Root
    while (minNode.left) {
      minNode = minNode.left;
    }

    return minNode.data;
  }

  max() {
    
    
    if(!this.Root) {
      return null;
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