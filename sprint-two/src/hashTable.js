

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        return;
      }
    }
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  // this._storage.each(function(value, i, array){
  //   console.log("Inside if: " + {value});
  //   if (index === i){
  //     for (var i = 0; i < value.length; i++){
  //       if (value[i][0] === k) {
  //         return value[i][1];
  //       }
  //     }
  //   }
  // });
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, i, array) {
    if (index === i) {
      array[index] = undefined;
    }
  });
};

// array[index].forEach(function(value, i, array){
//   if (array[i][0] === k){

//     return array[i][1];
//   }
// });
/*
 * Complexity: What is the time complexity of the above functions?
 */
//
// [ 2, 3, 7]

