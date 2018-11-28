var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numKey = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    numKey++;
    storage[numKey] = value;
  };

  someInstance.pop = function() {
    var lastItem = storage[numKey];
    delete storage[numKey];
    numKey--;
    return lastItem;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
