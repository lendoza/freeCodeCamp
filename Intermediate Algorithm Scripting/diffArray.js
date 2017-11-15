function diffArray(arr1, arr2) {
  var set1 = new Set(arr1);
  var set2 = new Set(arr2);

  var arr = []

  set1.forEach(function(val){
    if(!set2.has(val)){
        arr.push(val);
    }
  });

  set2.forEach(function(val){
    if(!set1.has(val)){
        arr.push(val);
    }
  })

  return arr
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);