function repeatStringNumTimes(str, num) {
    var result = '';

    while (num > 0){
        result += str;
        num--;
    }

    return result
}

repeat('abc', 3);