var BinarySearchTree = function(value) {
  this.root = null;
};

var treeNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

//insert
//create a new node
//initialize, starting at this node and check its root
//if root is null, place new node here
//if root is not null, compare its value with the root's value
//if it's bigger, check the right side,
//if the right side is null, we place here
//if not, repeate
BinarySearchTree.prototype.insert = function(value) {
  var node = new treeNode(value);
  if (this.root === null) {
    this.root = node;
    return this;
  }

  var current = this.root;
  while (current) {
    if (current.value === value) { return undefined; }
    if (current.value < value) {
      if (current.right === null) {
        current.right = node;
        return this;
      }
      current = current.right;
    } else {
      if (current.left === null) {
        current.left = node;
        return this;
      }
      current = current.left;
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {

};

BinarySearchTree.prototype.depthFirstLog = function(callBack) {

};

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.insert(6);
console.log(binarySearchTree);

/*
 * Complexity: What is the time complexity of the above functions?
 */

// 1st item - 8
// BinarySearchTree = {
//  value: 8,
//  left: null,
//  right: null
// }

// 2nd item - 3
// BinarySearchTree = {
//  value: 8,
//  left: {
//    value: 3,
//    left: null,
//    right: null
//  },
//  right: null
// }

// 3rd item - 10
// BinarySearchTree = {
//  value: 8,
//  left: {
//    value: 3,
//    left: null,
//    right: null
//  },
//  right: {
//    value: 10,
//    left: null,
//    right: null
// }