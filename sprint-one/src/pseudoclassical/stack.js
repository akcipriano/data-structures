var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

var numKey = 0;

Stack.prototype.size = function() {
  var storage = this.storage;
  return Object.keys(storage).length;
};

Stack.prototype.push = function(value) {
  numKey++;
  this.storage[numKey] = value;
};

Stack.prototype.pop = function() {
  var lastItem = this.storage[numKey];
  delete this.storage[numKey];
  numKey--;
  return lastItem;
};
