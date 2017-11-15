function sumAll(arr){
    var lower = Math.min(arr[0], arr[1]);
    var upper = Math.max(arr[0], arr[1]);

    var total = 0;

    for(var i = lower; i <= upper; i++){
        total += i;
    }

    return total;
}