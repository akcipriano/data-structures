var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // var holder = false;
  // if (this.children.length) {
  //   for (var i = 0; i < this.children.length; i++) {
  //     if (_.pluck(this.children[i], 'value').includes(target)) {
  //       holder = true;
  //     }

  //     // this.children[i].contains(target);
  //   }
  // }
  // if (_.pluck(this.children, 'value').includes(target)){
  //   return _.pluck(this.children, 'value').includes(target);
  // }

  if (this.children.length > 1) {
    for (var i = 0; i < this.children.length; i++) {
      var temp =  this.children[i].contains(target);
    }
    return temp;
  }
  return _.pluck(this.children, 'value').includes(target);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
