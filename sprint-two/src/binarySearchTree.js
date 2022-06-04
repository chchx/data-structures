var BinarySearchTree = function(value) {
<<<<<<< Updated upstream
  this.root = null;
};

var treeNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
=======
  // this = Object.create(BinarSearchTree.prototype)
  var obj = {};

  obj.value = value;
  obj.left = null;
  obj.right = null;
  extend(obj, searchMethod);
  return obj;
>>>>>>> Stashed changes
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
//insert
//create a new node
//initialize, starting at this node and check its root
//if root is null, place new node here
//if root is not null, compare its value with the root's value
//if it's bigger, check the right side,
//if the right side is null, we place here
//if not, repeate
<<<<<<< Updated upstream
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
=======
var searchMethod = {};

searchMethod.insert = function(value) {
  var node = BinarySearchTree(value);
  var placeNode = function(obj) {
    if (obj.left === null) {
      if (node.value < obj.value) {
        obj.left = node;
        return;
      }
    } else {
      if (node.value < obj.value) {
        placeNode(obj.left);
      }
    }

    if (obj.right === null) {
      if (node.value > obj.value) {
        obj.right = node;
        return;
>>>>>>> Stashed changes
      }
      current = current.right;
    } else {
      if (current.left === null) {
        current.left = node;
        return this;
      }
      current = current.left;
    }
<<<<<<< Updated upstream
  }
};
=======
  };
  placeNode(this);
>>>>>>> Stashed changes

};
searchMethod.contains = function(value) {

  var find = function(obj) {
    if (obj.left === null && obj.right === null) {
      return false;
    }
    if (obj.value === value) {
      return true;
    }
    if (obj.value < value) {
      find(obj.left);
    }
    if (obj.value > value) {
      find(obj.right);
    }
  };
  find(this);
  return false;
};

  // while (c) {
  //   if (this.value === value) { return true; }
  //   if (this.value > value) {
  //     this = this.left;
  //   } else {
  //     current = current.right;
  //   }
  // }
  // return false;
searchMethod.depthFirstLog = function(value) {

};

<<<<<<< Updated upstream
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.insert(6);
console.log(binarySearchTree);

/*
 * Complexity: What is the time complexity of the above functions?
 */
=======
var binarySearchTree = BinarySearchTree(5);
>>>>>>> Stashed changes

binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.insert(6);
console.log(binarySearchTree);

/*
* Complexity: What is the time complexity of the above functions?
*/

<<<<<<< Updated upstream
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
=======
// {
//   value: 5,
//   left: {
//     value: 2,
//     left: null,
//     right: {
//       value: 3,
//       left: null,
//       right: null,
//       insert: [Function (anonymous)],
//       contains: [Function (anonymous)],
//       depthFirstLog: [Function (anonymous)]
//     },
//     insert: [Function (anonymous)],
//     contains: [Function (anonymous)],
//     depthFirstLog: [Function (anonymous)]
//   },
//   right: {
//     value: 7,
//     left: {
//       value: 6,
//       left: null,
//       right: null,
//       insert: [Function (anonymous)],
//       contains: [Function (anonymous)],
//       depthFirstLog: [Function (anonymous)]
//     },
//     right: null,
//     insert: [Function (anonymous)],
//     contains: [Function (anonymous)],
//     depthFirstLog: [Function (anonymous)]
//   },
//   insert: [Function (anonymous)],
//   contains: [Function (anonymous)],
//   depthFirstLog: [Function (anonymous)]
// }
/*
* Complexity: What is the time complexity of the above functions?
*/

// var node = BinarySearchTree(value);
// var recurse = function(obj) {
//   if (node.value < obj.value) {
//     if (obj.left === null) {
//       obj.left = node;
//     } else {
//       recurse(obj.left);
//     }
//   } else {
//     if (obj.right === null) {
//       obj.right = node;
//     } else {
//       recurse(obj.right);
//     }
//   }
// };
// recurse(this);
>>>>>>> Stashed changes
