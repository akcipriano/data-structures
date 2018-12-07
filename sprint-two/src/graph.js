

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
  this.edgeHolder = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = _.indexOf(this.storage, node);
  this.storage.splice(index, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edgeHolder[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //[{3 : [1, 2]},{3 : a},{2: b}, {b: 4}]
  // {3 : [1,2], 1 : [3], 2 : [3]}
  // this.edge.push({value : fromNode, arr : [tfromNodeoNode]})
  if (this.edgeHolder.hasOwnProperty(fromNode)){
    this.edgeHolder[fromNode].push(toNode);
  } else {
    this.edgeHolder[fromNode] = [toNode];
  }

  if (this.edgeHolder.hasOwnProperty(toNode)){
    this.edgeHolder[toNode].push(fromNode);
  } else {
    this.edgeHolder[toNode] = [fromNode];
  }
  // this.edgeHolder.push(this.edge(fromNode, toNode));


  //if (edge[3] )
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// Graph.prototype.edge = function(fromNode, toNode) {
//   var edge = {};
//   edge.value = fromNode;
//   edge.connect = [];
//   edge.connect.push(toNode);

//   return edge;  // {value : connect}
// };


