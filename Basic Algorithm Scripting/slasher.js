function slasher(arr, howMany) {
  var n = 0;
  if (n < arr.length) {
    arr.splice(0, howMany);
  }
  return arr
}

slasher([1, 2, 3], 2);