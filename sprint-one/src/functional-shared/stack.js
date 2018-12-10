var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var holder = {};

  holder.storage = {};

  _.extend(holder, stackMethods);

  return holder;

};

var stackMethods = {};
var numKey = 0;

stackMethods.size = function() {
  var storage = this.storage;
  return Object.keys(storage).length;
};

stackMethods.push = function(value) {
  numKey++;
  this.storage[numKey] = value;
};

stackMethods.pop = function() {
  var lastValue = this.storage[numKey];
  delete this.storage[numKey];
  numKey--;
  return lastValue;
};
