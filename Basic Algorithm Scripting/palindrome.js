function palindrome(str) {
  // Replaces all special characters using Regular Expressions
  var str = str.toLowerCase().replace(/[\W_]/g, '');
  
  var reverse = str.split('').reverse().join('');
  if (str === reverse) {
     return true;
  }
  else {
     return false;
  }
}

palindrome("eye");