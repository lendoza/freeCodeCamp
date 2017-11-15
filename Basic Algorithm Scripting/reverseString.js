// Uses built in JS functions

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Uses decrementing for-loop

function reverseString(str) {
  var output = '';
  for (var i = str.length - 1; i >= 0; i--){
    output += str[i];
  }
  return output;
}

// Uses recursion

function reverseString(str){
    if(str === ''){
        return '';
    }

    else{
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

