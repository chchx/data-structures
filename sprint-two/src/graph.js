// Instantiate a new graph
var Graph = function() {
  // this = Object.create(Graph.prototype)
  // return this
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      if (this[key].includes(node)) {
        this.removeEdge(key, node);
      }
    }
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode].includes(toNode) && this[toNode].includes(fromNode)) { return true; }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(Number(toNode));
  this[toNode].push(Number(fromNode));
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // this[fromNode].splice(this[fromNode].indexOf(toNode), 1);
  // this[toNode].splcie(this[toNode].indexOf(fromNode), 1);
  this[fromNode] = this[fromNode].filter(function (element) {
    return element !== toNode;
  });
  this[toNode] = this[toNode].filter(function (element) {
    return element !== fromNode;
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate each ele in the pbj;
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      //console.log(key);
      cb(key);
    }
    //return cb(this[key]);
  }
  // return this;
};

var connectToFive = function(item) {
  graph.addEdge(item, 5);
};
var graph = new Graph();
graph.addNode(5);
graph.addNode(2);
graph.addNode(1);
graph.addNode(3);
graph.forEachNode(connectToFive);
console.log(graph);
/*
 * Complexity: What is the time complexity of the above functions?
 */



// graph.forEachNode(connectToFive);
// expect(graph.hasEdge(2, 5)).to.equal(true);
// expect(graph.hasEdge(1, 5)).to.equal(true);
// expect(graph.hasEdge(3, 5)).to.equal(true);
// expect(graph.hasEdge(5, 5)).to.equal(true);
