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
    delete storage[numKey];
    numKey--;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
