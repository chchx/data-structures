var BinarySearchTree = function(value) {
  // this = Object.create(BinarSearchTree.prototype)
  var obj = {};

  obj.value = value;
  obj.left = null;
  obj.right = null;
  extend(obj, searchMethod);
  return obj;
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
      }
      current = current.right;
    } else {
      if (current.left === null) {
        current.left = node;
        return this;
      }
      current = current.left;
    }
  };
  placeNode(this);

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

var binarySearchTree = BinarySearchTree(5);

binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.insert(6);
console.log(binarySearchTree);

/*
* Complexity: What is the time complexity of the above functions?
*/

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
