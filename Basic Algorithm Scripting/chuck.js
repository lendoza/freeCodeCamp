function chunk(arr, size) {
  var result = [];
  while (arr.length > size) {
    result.push(arr.splice(0, size))
  }
  if (arr.length) {
    result.push(arr);
  }
  return result;
}

chunk(['a', 'b', 'c', 'd'], 2);