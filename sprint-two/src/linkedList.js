var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //first create a node
    var node = Node(value);
    //check if head is undefined, if it dose, make the first node as our head
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      //if it doesn't, move our pointer to new node
      this.tail.next = node;
      //add the node to the tail
      this.tail = node;
    }
  };

  list.removeHead = function() {
    if (this.head) {
      var shifted = this.head.value;
      this.head = this.head.next;
      return shifted;
    } else {
      return null;
    }
  };

  list.contains = function(target) {
    var current = this.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
