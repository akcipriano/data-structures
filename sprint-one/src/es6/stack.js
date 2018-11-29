class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
  }

  push(value) {
    numKey++;
    this.storage[numKey] = value;
  }

  pop() {
    var lastItem = this.storage[numKey];
    delete this.storage[numKey];
    numKey--;
    return lastItem;
  }
}

var numKey = 0;