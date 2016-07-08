// Uses built in JS functions

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString('hello');

// Uses decrementing for-loop

function reverseString(str) {
  var output = '';
  for (var i = str.length - 1; i >= 0; i--)
    output += str[i];
  return output;
}