

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
  this.edgeHolder = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage.push(node);
  this.edgeHolder[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.storage.indexOf(node);
  this.storage.splice(index, 1);
  for (var i = 0; i < this.edgeHolder[node].length; i++){  //{1 : [12,3,4,2,3,5,1,4,12,3,45,3,1]} {12: [manaymany,1,manaymany]}
    var indexVal = this.edgeHolder[this.edgeHolder[node][i]].indexOf(node);
    this.edgeHolder[this.edgeHolder[node][i]].splice(indexVal, 1);
  }
  delete this.edgeHolder[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edgeHolder[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // {3 : [1,2], 1 : [3], 2 : [3]}
  this.edgeHolder[fromNode].push(toNode);
  this.edgeHolder[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {   // {3 : [1,2], 1 : [3], 2 : [3]}
  var indexTo = this.edgeHolder[fromNode].indexOf(toNode);
  var indexFrom = this.edgeHolder[toNode].indexOf(fromNode);
  this.edgeHolder[fromNode].splice(indexTo, 1);
  this.edgeHolder[toNode].splice(indexFrom, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var i = 0; i < this.storage.length; i++){
    cb(this.storage[i]);
  }
};

/*
* Complexity: What is the time complexity of the above functions?
Graph.prototype.addNode: O(1)
Graph.prototype.contains: O(n)
Graph.prototype.removeNode: O(n^2)
Graph.prototype.hasEdge: O(n)
Graph.prototype.addEdge: O(1)
Graph.prototype.removeEdge: O(n)
Graph.prototype.forEachNode: O(n)
 */
