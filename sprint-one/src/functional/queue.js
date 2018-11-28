var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numKey = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    numKey++;
    storage[numKey] = value;
  };

  someInstance.dequeue = function() {
    var firstItem = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];
    return firstItem;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
