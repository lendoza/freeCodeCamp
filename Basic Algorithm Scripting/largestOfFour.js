function largestOfFour(arr) {
  
  // Create empty array
  var largestArray = [];
  
  for (var i = 0; i < arr.length; i++){
    // Placeholder to find largest number
    var largestNumber = 0;
    
    for (var j = 0; j < arr.length; j++){
      if(largestNumber < arr[i][j]){
        largestNumber = arr[i][j];
      }
    }
    // Add largest number to new array
    largestArray.push(largestNumber);
  }
  
  return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
