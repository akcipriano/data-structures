var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var holder = {};

  holder.storage = {};

  _.extend(holder, queueMethods);

  return holder;

};

var queueMethods = {};
var numKey = 0;

queueMethods.size = function() {
  var storage = this.storage;
  return Object.keys(storage).length;
};


