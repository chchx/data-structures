// newTree = {value: x, children: [
// {value, children: [
//   {value, children: []}
// ]},
// {value, children: []}
// ]}

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var treeNode = Tree(value);
  this.children.push(treeNode);
};

treeMethods.contains = function(target) {
  //find all values []
  //check it values has target
  var finder = function(node) {
    var values = [];
    if (node.value) {
      values.push(node.value);
    }
    if (node.children !== undefined) {
      node.children.forEach(function(item) {
        values = values.concat(finder(item));
      });
    }
    return values;
  };

  var elementInTree = finder(this);
  return elementInTree.includes(target);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
