var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.storage = [];

  list.addToTail = function(value) {
    list.storage.push(Node(value));
    list.tail = list.storage[list.storage.length - 1];
    list.head = list.storage[0];

    if (list.storage.length === 2) {
      list.head.next = list.storage[1];
    }
  };

  list.removeHead = function() {
    var temp = list.storage.shift();
    list.head = list.storage[0];

    if (list.storage.length > 1) {
      list.head.next = list.storage[1];
    }
    if (list.storage.length > 1){
      list.storage[list.storage.length-2].next = list.storage[list.storage.length-1];
    }
    return temp.value;
  };

  list.contains = function(target) {
    return _.pluck(list.storage, 'value').includes(target);
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

 addToTail: O(1)
 removeHead: O(1)
 contains: O(n)
 Node: O(1)
 LinkedList: O(1)

 */





