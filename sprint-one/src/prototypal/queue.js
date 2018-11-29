var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var holder = Object.create(queueMethods);

  holder.storage = {};

  return holder;
};

var queueMethods = {};
var numKey = 0;

queueMethods.size = function() {
  var storage = this.storage;
  return Object.keys(storage).length;
};

queueMethods.enqueue = function(value) {
  numKey++;
  this.storage[numKey] = value;
};

queueMethods.dequeue = function() {
  var firstItem = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return firstItem;
};


