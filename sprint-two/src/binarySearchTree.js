var BinarySearchTree = function(value) {
  var obj = {};
  _.extend(obj, BinarySearchTree.prototype);
  obj.right = null;
  obj.left = null;
  obj.value = value;
  obj.storage = [value];
  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  if(!this.storage.includes(value)){
    this.storage.push(value);
  }
  var currentNode = this;
  while (currentNode) {
    if (currentNode.value > value) {
      if (currentNode.left) {
        currentNode = currentNode.left;
      } else {
        currentNode.left = BinarySearchTree(value);
        currentNode = null;
      }
    } else if (currentNode.value < value) {
      if (currentNode.right) {
        currentNode = currentNode.right;
      } else {
        currentNode.right = BinarySearchTree(value);
        currentNode = null;
      }
    } else {
      currentNode = null;
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  var temp = false;
  var currentNode = this;
  while (currentNode) {
    if (currentNode.value === value) {
      return true;
    } else if (currentNode.value > value) {
      if (currentNode.left){
        currentNode = currentNode.left;
      } else {
        currentNode = null;
      }
    } else if (currentNode.value < value) {
      if (currentNode.right) {
        currentNode = currentNode.right;
      } else {
        currentNode = null;
      }
    }
  }
  return temp;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  for (var i = 0; i < this.storage.length; i++) {
    cb(this.storage[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  BinarySearchTree.prototype.insert : O(n)
  BinarySearchTree.prototype.contains : O(log n)
  BinarySearchTree.prototype.depthFirstLog : O(n)
  BinarySearchTree: O(1)
 */
