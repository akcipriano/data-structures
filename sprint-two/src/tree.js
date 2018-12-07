var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];// fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {

  return checkIfTrue(this.children, target);

};

var  checkIfTrue = function(child, target) {
  var temp = false;

  if (_.pluck(child, 'value').includes(target)) {
    return true;
  }

  if (child.length > 0){
    for (var i = 0; i < child.length; i++){
      if (checkIfTrue(child[i].children, target)){
        return true;
      }
    }
  }

  return temp;
};

/*
 * Complexity: What is the time complexity of the above functions?
   treeMethods.addChild: O(1)
   treeMethods.contains: O(n)
   Tree(): O(1);

 */
