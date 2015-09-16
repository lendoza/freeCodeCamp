function largestOfFour(arr) {
  var num = [];
  for (var i=0; i<arr.length; i++) {
    var subArray = arr[i];      
       var largest = Math.max.apply(Math, subArray);
        num.push(largest);
  } 
  return num;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);