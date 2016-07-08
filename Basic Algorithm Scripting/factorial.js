// Recursive Solution

function factorialize(num) {
  if (num == 0){
    return 1
  }
  else {
  	return (num * factorialize(num - 1));
  }
}

factorialize(5);

// Iterative Solution

function factorialize(num) {
  var count = 1;
  for (var i = 1; i <= num ; i++){
    count *= i;
  }
  return count
}

factorialize(5);