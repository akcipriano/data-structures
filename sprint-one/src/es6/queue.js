class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
  }

  enqueue(value) {
    numKey++;
    this.storage[numKey] = value;
  }

  dequeue() {
    var firstItem = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return firstItem;
  }
}

var numKey = 0;

var newNew = new Queue;