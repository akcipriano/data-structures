var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  var index = _.indexOf(this._storage, item);
  this._storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 setPrototype.add(): O(1);
 setPrototype.contains(): O(n);
 setPrototype.remove(): O(n);
 Set(): O(1);
 */
