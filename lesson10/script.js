// Реализовать ф-ю, повторяющую поведение методов массива
// forEach, map, filter, some, every

// forEach([1,2,3], function(num) { console.log(num); }) // -> logged 1 2 3
// map([1,2,3], function(num) { return num**2 }) // -> [1, 4, 9]
// filter([1,2,3], function(num, index) { return index > 1 }) // -> [3]
// some([1,2,3], function(num, index) { return index > 1 }) // -> true
// every([1,2,3], function(num) { return num > 0 }) // -> true

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function forEach
function forEach(arr, cb) {
  var result = [];
  for (i = 0; i < arr.length; i++) {
    var temp = cb(arr[i]);
    result.push(temp);
  }
  return result;
}

var forEachFn = forEach(arr, function (num) {
  return num;
});

// function map
function map(arr, cb) {
  var result = [];
  for (i = 0; i < arr.length; i++) {
    var temp = cb(arr[i]);
    result.push(temp);
  }
  return result;
}

var mapFn = map(arr, function (num) {
  return num ** 2;
});

// function filter
function filter(arr, cb) {
  var result = [];
  for (i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
}

var filterFn = filter(arr, function (num, index) {
  return index > 1;
});

// function some
function some(arr, cb) {
  for (i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) {
      return true;
    }
  }
  return false;
}

var someFn = some(arr, function (num, index) {
  return index > 1;
});

// function every
function every(arr, cb) {
  for (i = 0; i < arr.length; i++) {
    if(!cb(arr[i])) {
      return false;
    }
  }
  return true;
}

var everyFn = every(arr, function(num) {
  return num > 0;
})

console.log(forEachFn);
console.log(mapFn);
console.log(filterFn);
console.log(someFn);
console.log(everyFn);