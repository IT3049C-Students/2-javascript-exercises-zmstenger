/**
 * IndexOf: you should be able to determine the location of an item in an array
 * Example: 
 * arr = [1,2,3,5,6]
 * calling the function like 
 * indexoff(arr, 3); should return the index 2
 */
function indexOf(arr, item) {
  return arr.indexOf(item);
}

// Sum: you should be able to sum the items of an array
// Example: arr = [1,2,3]   =>  6
function sum(arr) {
  return arr.reduce((partialSum, a) => partialSum + a, 0);
}

// Filter: Should filter out all instances of a value from an array
// Example: filtering 2 out of [1,2,3,5,6,2,4,2] should return [1,3,5,6,4]
function filterOut(arr, item) {
  return arr.filter(function(x) {
    return x !== item;
});
}

// Append: you should be able to add an item to the end of an array
function append(arr, item) {
  var newArray = arr
  newArray.push(item)
  return newArray;
}

// Truncate: you should be able to remove the last item of an array
// hint: pop, slice, splice would all work. Pay attention to the return value in the docs
function truncate(arr) {
  return arr.slice(0,-1);
}

// Concat: you should be able to join together two arrays
function concat(arr1, arr2) {
  return arr1.concat(arr2);
}

// Insert: you should be able to add an item at the specified index of an array
// hint: use splice and pay attention to the return value
function insert(arr, item, index) {
  var newArray = arr
  newArray.splice(index, 0, item)
  return newArray
}

// Square: you should be able to square each number in an array
// hint: use .map
// Example: [1,2,4,5] => [1,4,16,25]
function square(arr) {
  newArray= [];

    for (var i = 0, len = arr.length; i < len; i++) {
      newArray.push(arr[i] * arr[i]);
    }

    return newArray;     
}

module.exports = {
  indexOf,
  sum,
  filterOut,
  append,
  truncate,
  concat,
  insert,
  square
};