var BinarySearchTree = function(value) {
  // this = Object.create(BinarSearchTree.prototype)
  this.value = value;
  this.left = null;
  this.right = null;
  // return this;





  var node = {
    value: value,
    left: null,
    right: null
  };
  this.root = null;
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
  var node = BinarSearchTree(value);
  if (this.root === null) {
    this.root = node;
    return this,
  } else

BinarySearchTree.prototype.contains = function(value) {

};

BinarySearchTree.prototype.depthFirstLog = function(callBack) {

};

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